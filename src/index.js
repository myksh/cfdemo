/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request) {
	  let headers = new Headers();
	  let date = new Date();
	  let t = date.toLocaleTimeString()
	  let time = date.getTime();
	  let html_content = "";
	  let html_content1 = "";
	  let html_content2 = "";
	  let html_content3 = "";
	  let html_content4 = "";
	  let html_style =
		"body{padding:6em; font-family: sans-serif;} h1{color:#f6821f;}";
  
	  
	  html_content1 += "<p> Country: " + request.cf.country + "</p>";
	  html_content2 += "<p> Time: " + t +  " from" + "</p>";
	  html_content3 += "<p> EmailAddress: " + headers.get('Cf-Access-Authenticated-User-Email')
  
	  
	  let html = `<!DOCTYPE html>
		<head>
		  <title> CloudFlare PS Demo test </title>
		  <style> ${html_style} </style>
		</head>
		<body>
		  <h1>Hello CloudFlare!</h1>
		  <p>${html_content3} authenticated at ${html_content2} ${html_content1}</p>
		  
		</body>`;
  
	  return new Response(html, {
		headers: {
		  "content-type": "text/html;charset=UTF-8",
		},
	  });
	},
  };