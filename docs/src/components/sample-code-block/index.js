// Dependencies
import {h, toChildArray} from 'preact';

import CodeBlock from '../../components/code-block';
import sample from '../../routes/card/sample.txt';

// Class
export default ({children}) => {
  let child = children && toChildArray(children)[0];
  return (
    <div>
      <div className="mdc-typography--display1">Sample code</div>
      <CodeBlock>
        <code class="lang-js">{child}</code>
      </CodeBlock>
    </div>
  );
};
