import { ThemeProvider } from 'styled-components'
import GlobalStyles from "./components/styles/Global"
import MainContainer from './components/MainContainer'


const theme = {
  colors: {

    //Primary

    cyan: 'hsl(186, 34%, 60%)',
    softRed: 'hsl(10, 79%, 65%)',

    //Neutral

    darkBrown: 'hsl(25, 47%, 15%)',
    mediumBrown: 'hsl(28, 10%, 53%)',
    cream: 'hsl(27, 66%, 92%)',
    veryPaleOrange: 'hsl(33, 100%, 98%)',
  },

  mobile: '768px'
}



function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainContainer />
    </ThemeProvider>
  )
}

export default App

