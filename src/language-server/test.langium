grammar Test

import 'foo'

entry Model returns Foo:
    'model' name=ID;

interface Bar {}

terminal ID: /[_a-zA-Z][\w_]*/;
hidden terminal WS: /\s+/;
hidden terminal ML_NOTE: /\/\/\*[\s\S]*?\*\//;
hidden terminal SL_COMMENT: /\/\/[^\n\r]*/;
