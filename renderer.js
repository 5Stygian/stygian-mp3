//const information = document.getElementById('info')
//information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`

const pl = document.getElementById("playlists")
const src = document.getElementById("sources")

const func = async () => {
  const response = await window.versions.ping()
  console.log(response) // prints out 'pong'
}

func()

const testpl = async () => {
	console.log("playlist tab opened")
}
pl.addEventListener('click', testpl)

const testsrc = async () => {
	console.log("source tab opened")
}
src.addEventListener('click', testsrc)