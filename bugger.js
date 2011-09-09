var bugger = (function() {
    return function () {
      if(! window.console) return;
      
      var calr  = bugger.caller
        , args  = [].slice.apply(arguments)
        , stack = (new Error).stack
        , debug = []
        , func  = line = '';
      
      // Grab line number
      if(stack) { 
        var chunk = stack.split('\n')
          , len   = chunk.length
          , idx   = calr ? 2 : len-(chunk[len-1] ? 1 : 2); // FF new line workaround
        line = 'at '+chunk[idx].match(/\/(\w+\.\w+[\d\:\/]+)/)[1];
      }
      
      // Check for caller function
      if(calr) {
        debug = ['Args :', [].slice.apply(calr.arguments)];
        func  = 'in ' + (calr.name || 'anonymous') + '() ';
      }
      
      // Add trace args if any
      args.length && (debug = debug.concat([(calr?'\n':'')+'Debug:'].concat(args)));
      
      console.group('Debugger - %s[%s]', func, line);
      console.log.apply(console, debug); 
      console.groupEnd();
  }
})();