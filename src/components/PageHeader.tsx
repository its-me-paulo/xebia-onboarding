import * as React from 'react';

export interface IPageHeaderComponentProps {
    header: String
}

export function PageHeaderComponent (props: IPageHeaderComponentProps) {
  return (
    <div style={{width: "100%", height: "5vh", backgroundColor: "var(--main-color)", margin: "1vh 0"}}>
      <h3 style={{textAlign: "center"}}>{props.header}</h3>
    </div>
  );
}
