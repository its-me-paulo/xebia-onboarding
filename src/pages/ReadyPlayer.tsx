import * as React from 'react';
import { JsxAttribute } from 'typescript';
import { XDexComponent } from '../components/XDexCpmponent';

export interface IReadyPlayerAppProps {

}


export function ReadyPlayerApp(props: IReadyPlayerAppProps) {
  return (
    <>
      <div style={{width: 500, height: 500}}><XDexComponent/></div> 
      <div style={{ display: "flex", alignItems: "flex-start", flexWrap: "wrap", height: "100vh" }}>
        <div style={{ height: "90vh", width: "100%", backgroundColor: "rgba(241, 241, 241, 10)" }}>

        </div>
        <div id="hud" style={{ backgroundColor: "black", width: "100%", height: "10vh" }}></div>
      </div>
    </>
  );
}
