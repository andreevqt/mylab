import {Script} from 'gatsby';
import React from 'react';

type RTBProps = {
  blockId: string;
  renderTo?: string;
  type?: string;
  platform?: 'touch' | 'desktop';
};

export const RTB = (props: RTBProps) => {
  return (
    <>
      {
        props.renderTo
          ? <div id={props.renderTo}></div>
          : undefined
      }
      <Script>
        {
          `window.yaContextCb.push(function() {
            Ya.Context.AdvManager.render(${JSON.stringify(props)})
          })`
        }
      </Script>
    </>
  );
};
