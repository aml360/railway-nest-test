import { Controller, Get } from '@nestjs/common';

@Controller('')
export class PageController {
  @Get()
  returnHtml() {
    const html =
      /*html*/
      `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <title>Document</title>
      </head>
      <style>
        #myTitle {
          border-radius: 10px;
          background-color: red;
          color: white;
          padding: 10px;
        }
      </style>
    <h1 id="myTitle">Hello World!</h1>
    `;
    return html;
  }
}
