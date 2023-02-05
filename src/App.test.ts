import ReactDOM from "react-dom";
import SamurajJSApp from './App'


it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(SamurajJSApp, div)
    ReactDOM.unmountComponentAtNode(div)
})
