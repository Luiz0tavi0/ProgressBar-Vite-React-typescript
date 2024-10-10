import { ThemeProvider } from 'styled-components';
import ProgressBar from './components/progress-bar';
interface PropsApp { color?: string };

const App = ({ color }: PropsApp) => {
  const theme = {
    colors: {
      primary: color || "#232A70",

    },
  };

  const steps = [
    { id: 1, name: "Travelers", done: true },
    { id: 2, name: "Seat Selection", done: false },
    { id: 3, name: "Food & Drink", done: false },
    { id: 4, name: "Additional Products", done: false},
    { id: 5, name: "Payment", done: false},
  ]

  return (
    <ThemeProvider theme={theme}>
      <ProgressBar steps={steps} />
    </ThemeProvider>
  )
}

export default App;