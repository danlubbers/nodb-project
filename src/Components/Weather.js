// Component pulling external Weather API
// Does not work at the moment

import ReactDOM from 'react-dom';
import { OpenWeatherMap } from 'react-weather';

export default class Weather extends Component {
    constructor() {
        super();

    }

    render() {
        return(
ReactDOM.render(
    <OpenWeatherMap city="Provo" country='USA' appid="38a652477100830ccd41e808f3a27c05" />,
    document.getElementById('root')
)
)
}
}
