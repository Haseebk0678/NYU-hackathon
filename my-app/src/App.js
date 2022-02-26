import Head from './Head.js'
import background from "./img/pngtree-cute-hand-drawn-style-mathematics-education-pink-plaid-background-image_337364.jpeg";


export default function App() {
  return (
    <div>
      <div className = "BackgroundImage" style={{ backgroundImage: `url(${background})`,
          backgroundRepeat: 'no-repeat'

      }}>
        <Head></Head>
      </div>
    </div>
  );
}
