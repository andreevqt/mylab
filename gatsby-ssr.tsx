const React = require('react');

export const onRenderBody = ({setHeadComponents}) => {
  setHeadComponents([
    <script key="rtb-init">window.yaContextCb=window.yaContextCb||[]</script>,
    <script key="rtb-bundle" src="https://yandex.ru/ads/system/context.js" async />
  ]);
};
