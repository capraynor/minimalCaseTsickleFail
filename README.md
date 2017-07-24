# minimalCaseTsickleFail
minimal case for tsickle fail

TSICKLE COMMAND - .\node_modules\.bin\tsickle.cmd --externs=externs.js -- -p .

CLOSURE ? TRIED 

java -jar ./node_modules/google-closure-compiler/compiler.jar --language_in=ECMASCRIPT6 --language_out=ECMASCRIPT5 --externs=externs.js --compilation_level=ADVANCED --rewrite_polyfills=false --js=build/**.js --manage_closure_dependencies=true --js_output_file=index.js --entry_point=build.app.App --dependency_mode=STRICT
