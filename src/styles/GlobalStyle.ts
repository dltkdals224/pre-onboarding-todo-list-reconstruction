import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
* {
	box-sizing: border-box;
}

body {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	font-family: 'Montserrat', sans-serif;
}

h1 {
	margin: 0;

	font-weight: bold;
}

h2 {
	text-align: center;
}

p {
	margin: 20px 0 30px;

	font-size: 14px;
	font-weight: 100;
	line-height: 20px;
	letter-spacing: 0.5px;
}

span {
	font-size: 12px;
}

a {
	margin: 15px 0;
    
	font-size: 14px;
	text-decoration: none;
}

.page {
    display:flex;
    justify-content:center;
    align-items:center;

    width: 100vw;
    height: 100vh;
}

@keyframes show {
	0%, 49.99% {
		opacity: 0;
		z-index: 1;
	}
	
	50%, 100% {
		opacity: 1;
		z-index: 5;
	}
}

@keyframes fadein {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
@-moz-keyframes fadein { /* Firefox */
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
@-webkit-keyframes fadein { /* Safari and Chrome */
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
@-o-keyframes fadein { /* Opera */
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
@keyframes fadeout {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}
@-moz-keyframes fadeout { /* Firefox */
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}
@-webkit-keyframes fadeout { /* Safari and Chrome */
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}
@-o-keyframes fadeout { /* Opera */
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}
`;

export default GlobalStyle;
