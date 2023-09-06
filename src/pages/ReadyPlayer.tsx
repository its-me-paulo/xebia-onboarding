import * as React from 'react';
import { JsxAttribute } from 'typescript';
import { XDexComponent } from '../components/footer/XDexComponent';
import './OnboardingApp.css'
import { FooterComponent } from '../components/footer/FooterComponent';

export interface IReadyPlayerAppProps {

}


export function ReadyPlayerApp(props: IReadyPlayerAppProps) {
  return (
    <>
      <div id="onboarding-page">

      </div>
      <div id="footer"><FooterComponent /></div>
    </>
  );
}
