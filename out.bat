@echo off
setlocal EnableDelayedExpansion

set jar=L:\Doc\Git\LZR_JS\src\compiler.jar
for /f %%i in ('dir /b /s web ^| findstr "\."') do (
	set fp=%%~dpi
	set fp=!fp:%cd%\=!

	if not exist out\!fp! (md out\!fp!)
	if %%~xi == .js (
		if %%~nxi == flashCtrl.js (
			if not exist out\!fp!flashCtrl.js (
				echo /*Flash Ctrl*/ > out\!fp!flashCtrl.js
			)
		) else (
			java -jar %jar% --js !fp!flashCtrl.js --js %%~i --js_output_file out\!fp!%%~nxi
		)
	) else (
		if not exist out\!fp!%%~nxi (
			copy %%~i out\!fp!
		)
	)
)

echo --------------------------- END
pause
