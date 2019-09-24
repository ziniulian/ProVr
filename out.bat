@echo off
setlocal EnableDelayedExpansion

set jar=L:\Doc\Git\LZR_JS\src\compiler.jar
for /f %%i in ('dir /b /s srv ^| findstr "\."') do (
	set fp=%%~dpi
	set fp=!fp:%cd%\=!

	if !fp! NEQ srv\web\js\lib\ (
		if not exist out\!fp! (md out\!fp!)
		if %%~xi == .js (
			java -jar %jar% --js %%~i --js_output_file out\!fp!%%~nxi
		) else (
			if not exist out\!fp!%%~nxi (
				copy %%~i out\!fp!
			)
		)
	)
)

echo --------------------------- END
pause
