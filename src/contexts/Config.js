import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';

import { connect } from "socket.io-client";

const ConfigContext = React.createContext({})

const ConfigProvider = ({ children }) => {
  const [lastAction, setLastAction] = useState('-')
  const [events, setEvents] = useState([])
  const [clients, setClients] = useState([])
  const [isSocketConnected, setIsSocketConnected] = useState(false)
  const [socket, setSocket] = useState(null)
  const [serverIp, setServerIp] = useState("")
  const [carIp, setCarIp] = useState("")

  function reset() {
    setEvents([])
    setClients([])
    setSocket([])
    setServerIp("")
  }

  useEffect(() => {
    if (serverIp !== "") {
      const socket = connect(`http://${serverIp}`, {
        reconnectionDelayMax: 10000,
        query: {
          "name": "Controle - App"
        }
      });
  
      setSocket(socket)
      setIsSocketConnected(true)
  
      return () => { socket.disconnect(); setIsSocketConnected(false) }
    }
  }, [serverIp])

  useEffect(() => {
    if (socket) {
      socket.on("log", (data) => {
        setEvents(prevState => {
          return [...prevState, data]
        })
      });

      socket.on('connect', () => {
        socket.emit("get-activity", null)
        setIsSocketConnected(true)
      })

      socket.on("activity", (data) => {
        setClients(data.map((item) => {
          let itemData = { ...item };
          const activeSince = new Date(itemData.data.activeSince)
          const activeBy = itemData.data.activeBy
          const activeByHour = Math.floor(activeBy / 3600)
          const activeByMinutes = Math.floor((activeBy - activeByHour * 3600) / 60)


          itemData.data.activeSince = `${activeSince.toLocaleDateString()} ${activeSince.toLocaleTimeString()}`
          itemData.data.activeBy = `${activeByHour}h${activeByMinutes}min`

          return (itemData)
        }))
      });

      socket.on("disconnect", () => {
        setIsSocketConnected(false)
        setClients(prevState => {
          return prevState.map(item => {
            let client = { ...item }

            client.status = 'Inactive'
            client.ActiveBy = '0h0min'

            return client
          })
        })
      });
    }
  }, [socket])

  async function handleSendAction(event) {
    console.log(event)
    setLastAction(event.action)

    const action = {
        event: `${event.event} ${event.action}`,
        type: "HTTP/POST",
        emitter: socket.id,
        client: {
          IP: "192.168.0.3",
          name: "Aplicativo"
        },
        to: {
          IP: "192.168.0.8",
          name: "API"
        },
        value: JSON.stringify(event)
    }

    try {
        await axios.post(`http://${carIp}/action`, action)
        if (serverIp !== carIp) {
          await axios.post(`http://${serverIp}/action`, action)
        }
        // await instance.post('/action', action)
        // socket.emit('log', action)
    } catch (error) {
        console.log(error)
    }
  }


  return (
    <ConfigContext.Provider value={{
      events,
      setEvents,
      clients,
      serverIp,
      setServerIp,
      carIp,
      setCarIp,
      handleSendAction,
      lastAction,
      setLastAction,
      isSocketConnected
    }}>
      {children}
    </ConfigContext.Provider>
  )
}

function useConfig() {
  const context = useContext(ConfigContext);

  if (!context) {
    throw new Error("useConfig must be used within a ConfigProvider");
  }

  return context;
}

export { ConfigProvider, useConfig };