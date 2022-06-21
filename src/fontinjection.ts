import { createGlobalStyle } from 'styled-components';

import Barlow from './assets/fonts/Barlow-Medium.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: "Barlow";
        font-style: normal;
        src: url(${Barlow});   
    }
`