import { HandleRequest, HttpRequest, HttpResponse } from "@fermyon/spin-sdk";

export const handleRequest: HandleRequest = async function (
  request: HttpRequest, 
  
): Promise<HttpResponse> {
    console.log(`Hostname: {127.0.0.1}`);
    console.log(`Pathname: {:3000/hello}`);

    const urlString = 'http://127.0.0.1:3000/';
    const url = new URL(':3000/?color=maroon');

    const hostname = '127.0.0.1';
    const pathname = ':3000/?color=maroon';

    const urlParams = new URLSearchParams('http://127.0.0.1:3000/');
    urlParams.set('color', 'maroon');
    const updatedUrl = `{http://127.0.0.1:3000/?color=maroon}`
    console.log(updatedUrl);
  
    let jsonString = `{"color": "maroon"}`;
    let jsonObject = JSON.parse(jsonString)

  return {
    status: 200,
    headers: { "content-type": "text/html; charset=utf-8" },
    body: `<html>
    <head>
    <style>
    body {background-color: dimgray;}
    h1{font-family: georgia;
	font-size: 200%;}
    p {color: maroon;
	font-family: georgia;
	font-size: 75%;}
    h2{font-family: georgia;
	font-size: 200%}
    </style>
    </head>
    <body>

    <h1> Hamlet's "To be or not to be" Soliloquy <h1>
    <h1> -------------------------------------------------------- <h1/>
        <p>To be or not to be-- that is the question: <p/>
        <p>Whether 'tis nobler in the mind to suffer <p/>
        <p>The slings and arrows of outrageous fortune, <p/>
        <p>Or to take arms against a sea of troubles <p/>
        <p>And, by opposing, end them. To die, to sleep-- <p/>
        <p>No more-- and by a sleep to say we end <p/>
        <p>The heartache of the thousand natural shocks <p/>
        <p>That flesh is heir to-- 'tis a consummation <p/>
        <p>Devoutly to be wished. To die, to sleep-- <p/>
        <p>To sleep, perchance to dream. Ay, there's the rub, <p/>
        <p>For in that sleep of death what dreams may come, <p/>
        <p>When we have shuffled off this mortal coil, <p/>
        <p>Must give us pause. There's the respect <p/>
        <p>That makes calamity of so long life. <p/>
        <p>For who would bear the whips and scorns of time, <p/>
        <p>Th' oppressor's wrong, the proud man's contumely, <p/>
        <p>The pangs of despised love, the law's delay, <p/>
        <p>The insolence of office, and spurns <p/>
        <p>That patient merit of th' unworthy takes, <p/>
        <p>When he himself might his quietus make <p/>
        <p>With a bare bodkin? Who would fardels bear, <p/>
        <p>To grunt and sweat under weary life, <p/>
        <p>But that the dread of something after death, <p/>
        <p>The undiscovered country from whose bourn <p/>
        <p>No traveler returns, puzzles the will <p/>
        <p>And makes us rather bear those ills we have <p/>
        <p>Than fly to others that we know not of? <p/>
        <p>Thus conscious does make cowards of us all, <p/>
        <p>And this the native hue of resolution <p/>
        <p>Is sicklied o'er with the pale cast of thought <p/>
        <p>And enterprises of great pitch and moment <p/>
        <p>With this regard their currents turn awry <p/>
        <p>And lose the name of action. <p/>
		<h2>   	-William Shakespeare <h2/>

    </body>
    </html>`   
};
  }
  