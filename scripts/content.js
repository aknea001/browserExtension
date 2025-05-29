ws = new WebSocket("wss://examchat.keali.org/ws?token=&groupID=1")

ws.addEventListener("open", () => {
    console.log("Connected to ws..")

    let notifContainer = document.querySelector(".downtimeEx-notifContainer")

    if (!notifContainer) {
        notifContainer = document.createElement("div")
        notifContainer.classList.add("downtimeEx-notifContainer")
        document.body.appendChild(notifContainer)
    }
})

ws.addEventListener("message", ({ data }) => {
    data = JSON.parse(data)

    const notifContainer = document.querySelector(".downtimeEx-notifContainer")

    if (!notifContainer || data.event != "newMessage") {
        return
    }

    const newNotif = document.createElement("div")

    newNotif.classList.add("downtimeEx-notif")
    newNotif.innerHTML = `${data.msg}`
    newNotif.setAttribute("onclick", "this.remove()")
    notifContainer.appendChild(newNotif)
})

function removeNotif(element) {
    if (!element) {
        return
    }

    element.remove()
}