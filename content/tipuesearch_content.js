var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'SSH', 'text': '批次檔設定 \n 執行隨身碟 SciTE.exe ( 位於 201906_fall\\data\\wscite415\\wscite 目錄下 ) \n 開啟 \xa0start_mdecourse.bat 並加入 \n \xa0 \n REM for putty \n Set GIT_HOME=%Cdisk%:\\portablegit\\bin\\ \n Set GIT_SSH=%Disk%:\\putty\\plink.exe \n SSH 設定 \n 到\xa0 .ssh\xa0 的目錄下 \n 編輯\xa0 config,插入 \n P roxy Command y:/putty/plink.exe github.com %h %p \n 並註解掉 \n IdentityFile "y:\\home_mdecourse\\.ssh\\id_rsa" \n \n 設定 SSH key 的使用配置 ( 使用\xa0Ipv 6 網路 ) \n 先下載\xa0 putty \xa0 , 放到可攜系統的 data 目錄底下 \n Key 轉換 ( 此設定方法是拿先前的\xa0 Open SSH key  ) \n 先建立一個 key ( 若之前已經有 Open SSH 的 key 就可以直接用那把 key ) \n 執行\xa0puttygen.exe\xa0 \n 載入一個\xa0 Open SSH 的 key \n \n *p.s.\xa0 若是使用之前的 key , bits 數請寄的設定為 4096 , 轉換成的類型請設定成 rsa\xa0 \n 轉存成 rsa 的 prviate key ( ppk檔 ) \n \n Putty 設定 \n 執行 putty.exe \n 建立一個 session 叫 github.com \n Host Name : github.com \n Port : 22 \n Connection type : SSH \n \n 設定 proxy\xa0 \n Proxy type : HTTP \n Proxy hostname :\xa0 [2001:288:6004:17::7]\xa0\xa0\xa0\xa0 Port : 3128 \n Do DNS name lookup at proxy end :\xa0 Auto \n Username :\xa0 kmolab \n Password : kmolab \n \n 設定 SSH 底下的 Auth \n Private key file for authentication :\xa0\xa0 ( 請指定 rsa- key  的位置\xa0 ) \n \n *p.s.\xa0 需指定 ppk 檔 \n 儲存 session 設定 \n \n', 'tags': '', 'url': 'SSH.html'}, {'title': 'Solvespace', 'text': '', 'tags': '', 'url': 'Solvespace.html'}, {'title': 'Solvespace 編譯', 'text': '先將 Y:\\portablegit\\bin\\sh.exe 改名為 sh_rename_for_solvespace.exe \n re sh.exe sh_rename_for_solvespace.exe \n *p.s.\xa0 re 是重新命名的指令 \n git version 查驗 git 版本 ( 需要git 2.13 版本以上 ) \n git clone --recurse-submodules https://github.com/solvespace/solvespace.git solvespace \n *p.s.\xa0 使用\xa0 git clone\xa0 --recurse-submodules 取得所有子模組資料，clone 前請先確認 \n 是否有重複檔名的資料，並耐心等候取得資料，以確保檔案完整性 \n 上述指令同: \n git clone\xa0 https://github.com/solvespace/solvespace.git \xa0 \n cd solvespace \n git submodule init \n git submodule update \n 編輯 Y:\\tmp\\solvespace\\extlib\\angle\\CMakeLists.txt 將 713 行和 714行註解掉，像底下這樣 \n #list(APPEND ANGLE_DEFINITIONS #"-DANGLE_PRELOADED_D3DCOMPILER_MODULE_NAMES={ \\"d3dcompiler_47.dll\\", \\"d3dcompiler_46.dll\\", \\"d3dcompiler_43.dll\\" }") endif() \n *p.s.\xa0 漏掉此步驟，否則後續編譯會有錯誤 \n 到\xa0 Y:\\tmp\\solvespace\\extlib\\libpng 目錄底下新建名為 build目錄 \n cd solvespace\xa0 \n cd extlib \n cd libpng \n mkdir build \n cd build \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release \n mingw32-make \n 重新命名 Y:\\tmp\\solvespace\\extlib\\libpng\\build\\libpng.dll.a 改名為 libpng_static.a 並且複製到 Y:\\msys64\\mingw64\\lib \n 回到 Y:\\tmp\\solvespace 目錄下新建名為 build目錄 \n mkdir build \n cd build \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release \n mingw32-make \n 完成以上編譯後執行\xa0 Y: tmp\\solvespace\\build\\bin\\solvespace.exe\xa0 \xa0，若能成功執行就能確定完成 Solvespace 編譯 \n \n', 'tags': '', 'url': 'Solvespace 編譯.html'}, {'title': 'Solvespace 操作', 'text': '快捷指令介紹 \n 幾何 \n S 直線 \n R 矩形 \n C 圓形 \n P 點 \n Shift+X 擠出 \n Shift+L 迴轉 \n 視角 \n W 正視 (指定或編輯面) \n F2 正視 (與螢幕最接近平行的工作面轉正) \n F3 等角 \n 約束指令 \n M 中心 \n D 標註(直線) \n N 標註(角度) \n Q 等長 \n H 水平 \n V 垂直 \n L 平行 \n O 重合 \n [ 垂直 \n Solvespace Tutorial #12 \n \n', 'tags': '', 'url': 'Solvespace 操作.html'}, {'title': 'STL', 'text': '', 'tags': '', 'url': 'STL.html'}]};