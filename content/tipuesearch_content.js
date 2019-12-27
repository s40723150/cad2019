var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': '環境設定', 'text': '', 'tags': '', 'url': '環境設定.html'}, {'title': 'SSH', 'text': '批次檔設定 \n 執行隨身碟 SciTE.exe ( 位於 201906_fall\\data\\wscite415\\wscite 目錄下 ) \n 開啟 \xa0start_mdecourse.bat 並加入 \n REM for putty \n Set GIT_HOME=%Cdisk%:\\portablegit\\bin\\ \n Set GIT_SSH=%Disk%:\\putty\\plink.exe \n SSH 設定 \n 到\xa0 .ssh\xa0 的目錄下 \n 編輯\xa0 config,插入 \n P roxy Command y:/putty/plink.exe github.com %h %p \n 並註解掉 \n IdentityFile "y:\\home_mdecourse\\.ssh\\id_rsa" \n \n 設定 SSH key 的使用配置 ( 使用\xa0Ipv 6 網路 ) \n 先下載\xa0 putty \xa0 , 放到可攜系統的 data 目錄底下 \n Key 轉換 ( 此設定方法是拿先前的\xa0 Open SSH key  ) \n 先建立一個 key ( 若之前已經有 Open SSH 的 key 就可以直接用那把 key ) \n 執行\xa0puttygen.exe\xa0 \n 載入一個\xa0 Open SSH 的 key \n \n *p.s.\xa0 若是使用之前的 key , bits 數請寄的設定為 4096 , 轉換成的類型請設定成 rsa\xa0 \n 轉存成 rsa 的 prviate key ( ppk檔 ) \n \n Putty 設定 \n 執行 putty.exe \n 建立一個 session 叫 github.com \n Host Name : github.com \n Port : 22 \n Connection type : SSH \n \n 設定 proxy\xa0 \n Proxy type : HTTP \n Proxy hostname :\xa0 [2001:288:6004:17::7]\xa0\xa0\xa0\xa0 Port : 3128 \n Do DNS name lookup at proxy end :\xa0 Auto \n Username :\xa0 kmolab \n Password : kmolab \n \n 設定 SSH 底下的 Auth \n Private key file for authentication :\xa0\xa0 ( 請指定 rsa- key  的位置\xa0 ) \n \n *p.s.\xa0 需指定 ppk 檔 \n 儲存 session 設定 \n \n', 'tags': '', 'url': 'SSH.html'}, {'title': 'Batch Command', 'text': 'cad.bat - 啟動 wsgi.py 並且在瀏覽器開啟 https 9443 動態網頁 \n @echo off\ny:\ncd tmp\\cad2019\\cmsimde\nstart python wsgi.py | start chrome https://localhost:9443 \n \xa0cadh.bat - 啟動 http-server 並且在瀏覽氣開啟 https 8444 靜態網頁 \n @echo off\ny:\ncd tmp\\cad2019\\\nstart python http-server.py | start chrome https://localhost:8444 \n cadg.bat -\xa0啟動 gitextensions\xa0 \n @echo off\nY:GitExtensions\\gitextensions.exe  browse y:\\tmp\\cad2019\\ \n \n', 'tags': '', 'url': 'Batch Command.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'Solvespace', 'text': '', 'tags': '', 'url': 'Solvespace.html'}, {'title': 'Solvespace 編譯', 'text': '先將 Y:\\portablegit\\bin\\sh.exe 改名為 sh_rename_for_solvespace.exe \n re sh.exe sh_rename_for_solvespace.exe \n *p.s.\xa0 re 是重新命名的指令 \n git version 查驗 git 版本 ( 需要git 2.13 版本以上 ) \n git clone --recurse-submodules https://github.com/solvespace/solvespace.git solvespace \n *p.s.\xa0 使用\xa0 git clone\xa0 --recurse-submodules 取得所有子模組資料，clone 前請先確認 \n 是否有重複檔名的資料，並耐心等候取得資料，以確保檔案完整性 \n 上述指令同: \n git clone\xa0 https://github.com/solvespace/solvespace.git \xa0 \n cd solvespace \n git submodule init \n git submodule update \n 編輯 Y:\\tmp\\solvespace\\extlib\\angle\\CMakeLists.txt 將 713 行和 714行註解掉，像底下這樣 \n #list(APPEND ANGLE_DEFINITIONS #"-DANGLE_PRELOADED_D3DCOMPILER_MODULE_NAMES={ \\"d3dcompiler_47.dll\\", \\"d3dcompiler_46.dll\\", \\"d3dcompiler_43.dll\\" }") endif() \n *p.s.\xa0 漏掉此步驟，否則後續編譯會有錯誤 \n 到\xa0 Y:\\tmp\\solvespace\\extlib\\libpng 目錄底下新建名為 build目錄 \n cd solvespace\xa0 \n cd extlib \n cd libpng \n mkdir build \n cd build \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release \n mingw32-make \n 重新命名 Y:\\tmp\\solvespace\\extlib\\libpng\\build\\libpng.dll.a 改名為 libpng_static.a 並且複製到 Y:\\msys64\\mingw64\\lib \n 回到 Y:\\tmp\\solvespace 目錄下新建名為 build目錄 \n mkdir build \n cd build \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release \n mingw32-make \n 完成以上編譯後執行\xa0 Y: tmp\\solvespace\\build\\bin\\solvespace.exe\xa0 \xa0，若能成功執行就能確定完成 Solvespace 編譯 \n \n \n W7 \n 在about裡插入This is Solvespace compiled by 學號 (40723150) \n \n', 'tags': '', 'url': 'Solvespace 編譯.html'}, {'title': 'Solvespace 操作', 'text': '快捷指令介紹 \n 幾何 \n S 直線 R 矩形 C 圓形 P 點 Shift+X 擠出 Shift+L 迴轉 \n 視角 \n W 正視 (指定或編輯面) F2 正視 (與螢幕最接近平行的工作面轉正) F3 等角 \n 約束指令 \n M 中心 D 標註(直線) N 標註(角度) Q 等長 H 水平 V 垂直 L 平行 O 重合 [ 垂直 \n Solvespace Tutorial #12 \n \n \n W7 \n 繪圖驗證 7 \n \n 繪圖驗證 10 \n \n', 'tags': '', 'url': 'Solvespace 操作.html'}, {'title': 'STL', 'text': '\n \n', 'tags': '', 'url': 'STL.html'}, {'title': 'V-rep', 'text': '', 'tags': '', 'url': 'V-rep.html'}, {'title': 'Webots', 'text': 'Webots 啟動: \n 執行路徑設定 \n 在 start_mdecourse_webots.bat 插入 \n set path_webots=%Disk%:\\Webots_2019b_rev1\\msys64\\mingw64\\bin;%Disk%:\\Webots_2019b_rev1\\msys64\\usr\\bin\n \n \n 在 path 的最後面加入\xa0%path_webots% \n \n 啟動指令: \n 在 y:\\ 根目錄建立 start_webots.bat , 內容為 \n start Y:\\Webots_2019b_rev1\\msys64\\mingw64\\bin\\webots.exe \n 當隨身程式系統納入上述兩個條件並啟動後, 可以直接在命令列輸入 start_webots.bat 啟動 \n 將\xa0 Webots_2019b_rev1.7z \xa0解壓縮後放在 data 目錄裡面 \n \n Webots 終止 \n 在 stop.bat 插入 \n taskkill /IM webots.exe /F\n \n \n', 'tags': '', 'url': 'Webots.html'}, {'title': 'NX', 'text': '', 'tags': '', 'url': 'NX.html'}, {'title': 'NX3', 'text': '', 'tags': '', 'url': 'NX3.html'}, {'title': 'NX12', 'text': 'NX12 教材 \xa0資料整理 \n NX12配置(合併至現有可攜) \n 先下載 NX12可攜版 \n 解壓縮 和 \n 解壓縮到可攜系統的 目錄底下 \n 解壓縮到可攜系統的 目錄底下 \n *注意 裡面的 %path%; 記得刪除，不然無法執行 python \n \n 批次檔單獨執行NX12設定(在Y槽開啟) \n 將 裡面的程式碼改成 \n @echo off\nset Disk=y\nsubst %Disk%: "data"\n\n%Disk%:\n\nREM for NX12\nset UGII_BASE_DIR=%Disk%:\\NX12\nset TMP_DIR=%Disk%:\\tmp\nset UGII_USER_PROFILE_DIR=%Disk%:\\home\nset START_DIR=%TMP_DIR%\nset UGII_TMP_DIR=%TMP_DIR%\nset UGII_USER_DIR=%Disk%:\\tmp\nset UGII_GROUP_DIR=%Disk%:\\tmp\nset UGII_SITE_DIR=%Disk%:\\tmp\nset UGII_BASE_DIR_CUSTOM=%UGII_BASE_DIR%\n\nset SPLM_LICENSE_SERVER=28000@140.130.17.37\nset UGII_LANG=english\n\nset UGII_ROOT_DIR=%UGII_BASE_DIR%\\ugii\nset UGS_LICENSE_BUNDLE=ACD11,ACD10\nset UGII_TEMPLATE_DIR=%UGII_ROOT_DIR%\\templates\nset ugpath=%UGII_BASE_DIR%\\nxbin;%UGII_BASE_DIR%\\ugii;%UGII_BASE_DIR%\\NXBIN\\Radical;%UGII_BASE_DIR%\\NXBIN\\managed;\n\npath=%ugpath%;\n\nstart %UGII_BASE_DIR%\\ugii\\ugraf.exe -nx\n\nExit \n \n 停止可攜同時停止NX12(修改 stop.bat) \n 將 裡面程式碼改成 \n @echo off\nset Disk=y\npath=%PATH%;\n\ntaskkill /IM python.exe /F\ntaskkill /IM pythonw.exe /F\ntaskkill /IM node.exe /F\ntaskkill /IM Range.exe /F\ntaskkill /IM SciTE.exe /F\ntaskkill /IM webots.exe /F\ntaskkill /IM ugraf.exe /F\nREM 終止虛擬硬碟與目錄的對應\nsubst %Disk%: /D\nREM 關閉 cmd 指令視窗\ntaskkill /IM cmd.exe /F\nEXIT \n 主要是通過 taskkill /IM ugraf.exe /F 來停止NX12 \n', 'tags': '', 'url': 'NX12.html'}, {'title': 'CH1 引言', 'text': '工程師現在使用 CAD、CAM 和 CAE 系統來進行自動化的設計和生產，現在這些系統每天被用在各種不同的工程任務。底下簡要說明如何 使用 CAD、CAM 和 CAE\xa0來實現產品的過程。 \n 1.1 產品實現過程 \n 產品實現過程可以大致分為兩個階段：設計和製造。 \n 設計過程可收集了相關的設計信息，後可制定了設計規範。根據相關設計信息進行可行性研究，並進行詳細設計和分析。詳細設計包括設計概念，預期產品圖紙，草圖和幾何建模。分析包括應力分析，干涉檢查，運動學分析，質量特性計算和公差分析以及設計優化。 \n 製造過程始於從生產計劃開始的車間活動，該活動使用設計過程圖並以實際產品結束。流程計劃包括生產計劃，材料採購和機器選擇等活動。在生產過程的各個階段，需要完成各種任務，例如購買新工具，NC 編程和質量檢查。流程計劃包括對產品製造中使用的所有流程的計劃。通過質量控制檢查的零件將經過功能測試，包裝，標記和運送給客戶。 \n \n 上圖顯示了代表產品實現過程的圖表（Mastering CAD / CAM，由Ibrahim Zeid，McGraw Hill，2005年） \n 1.2\xa0 CAD / CAM 開發的簡要歷史 \n 當前的 CAD / CAM 技術的起源可以追溯到文明古代，當時古埃及的工程師意識到了圖形通信。正交投影實踐今天是在1800年代發明的。 CAD / CAM 系統的真正開發始於 1950 年代。 CAD / CAM 在上個世紀經歷了四個主要的發展階段。 \n 1950 年代被稱為交互式電腦圖形時代。麻省理工學院的伺服機構實驗室在三軸銑床上演示了數控（NC）的概念。發展歷程在這個時代，由於當時電腦的缺點而放慢了速度。在 1950 年代後期，開始了自動編程工具（APT）的開發，並探索了通用汽車公司互動圖形的潛力。 \n 1960 年代是交互式電腦圖形學最關鍵的研究時期。Ivan Sutherland 開發了畫板系統，該系統演示了創建圖紙和在陰極射線管（CRT）上以交互方式進行對象交替。 CAD 一詞開始出現，「設計」一詞超越了基本的製圖概念。通用汽車宣布了他們的 DAC-1 系統和 Bell Technologies 推出了GRAPHIC 1 遠程顯示系統。 \n 在 1970 年代期間，前十年在電腦圖形學方面的研究工作開始富有成果。按行業，政府和學術界，並且實現了交互式電腦圖形學在提高生產率方面的潛力。 1970 年代被描述為電腦製圖和專用儀器設計應用程序開始的黃金時代。國家計算機圖形協會（NCGA）成立，並且初始圖形交換規範（IGES）開始了。 \n 在 1980 年代，新的理論和算法得到了發展，並且設計和製造的各種要素都得到了發展。主要的研發重點是擴大 CAD / CAM 系統超越了三維幾何設計，並提供了更多的工程應用。 \n 現今 CAD / CAM 的開發側重於設計和製造中各種元素的高效，快速集成和自動化，以及新算法的開發。有許多可直接使用的商業 CAD / CAM 軟件包，它們非常易於使用並且非常友好。以下是當前市場中的一些商業軟件包。 \n \n Solid Edge、AutoCAD、Inventor 和 TurboCAD 是一些負擔得起的CAD軟件系統。 \n NX、Pro-E、CATIA 和 SolidWorks 是高端建模和設計軟體更昂貴但功能更強大的系統。這些軟體系統還具有電腦輔助的製造和工程分析功能。 \n Onshape 和 Fusion 360 是建立在雲端的 CAD 軟件，可通過用戶的瀏覽器提供CAD 功能。 \n ANSYS、ABAQUS、NASTRAN 和 COMSOL 是主要用於 CAE 。 \n \n 1.3\xa0CAD/CAM/CAE 的定義 \n 1.3.1 電腦輔助設計 – CAD \n CAD 是與使用電腦系統來協助設計的創建、修改、分析和優化有關的技術。 任何體現電腦圖形學的電腦程序和在設計過程中促進工程功能的應用程序都可以歸類為 CAD 軟件。 CAD 的最基本作用是定義設計的幾何形狀－機械零件、產品組裝、建築結構、電子電路、建築物佈局等。CAD 系統的最大好處是可以節省大量時間和精力。 減少因每次需要重新定義設計的幾何形狀而導致的錯誤。 \n 1.3.2 電腦輔助製造\xa0– CAM \n CAM 技術涉及電腦系統的計畫、管理和控制，該電腦系統通過與工廠生產資源的電腦介面來的計畫、管理和控制製造操作。 CAM 最重要的領域之一是數控（NC）。 這是一種使用編程指令來控制工具機的技術，該工具機利用切削、銑削、磨削、沖壓或將原料製成成品。 CAM的另一個重要功能是在機器人編程中。 流程計劃也是電腦自動化的目標。 \n 1.3.3 電腦輔助工程\xa0– CAE \n CAE 技術使用計算機系統來分析 CAD 創建的產品的功能，從而使設計人員可以模擬和研究產品的性能，從而可以優化和優化設計。 CAE 工具可用於許多不同類型的分析。 例如，運動學分析程序可用於確定機構中的運動路徑和連桿速度。 動態分析程序可用於確定複雜組件（例如汽車）中的載荷和位移。 最受歡迎的分析方法之一是使用有限元素方法（FEM）。 該方法可用於確定應力，變形，傳熱，磁場分佈，流體流動和其他連續場問題，而這些問題通常很難用任何其他方法解決。 \n 1.4 教程範圍 \n \n 第2章介紹了 NX 12 的基本知識和基本功能。 \n 第3章介紹了草圖的概念。它描述瞭如何創建草圖以及給出幾何和尺寸約束。 \n 第4章零件的實際設計和建模。如何使用特徵，例如參考特徵、掃掠特徵和原始特徵。 \n 第5章如何從零件模型轉成工程圖。在本章中，將示範如何通過添加視圖，標註零件圖形的尺寸以及修改圖形中的各種屬性（例如文本大小、箭頭大小和公差）來創建圖紙。 \n 第6章介紹了裝配建模的概念及其術語。它描述了 TopDown 建模和 Bottom-Up 建模。我們將使用自下而上的模型進行組裝組件變成產品。 \n 第7章介紹了自由格式建模。將演示建模曲線和平滑表面的方法。 \n 第8章簡要介紹了NX 12中用於有限元分析的設計仿真。 \n 第9章介紹刀具路徑的生成、驗證和仿真，以創建CNC（計算機數字代碼），以從多軸甚至先進的CNC機床生產設計零件。 \n 每章中使用的示例和練習題經過精心設計，最終將在本章中進行匯總。 由於這獨特功能，您應該保存在每一章中創建的所有模型。 \n \n \n', 'tags': '', 'url': 'CH1 引言.html'}, {'title': 'CH2 入門', 'text': '2.1 啟動NX12並打開文件 \n 2.1.1 啟動NX12 \n 2.1.2 打開一個新文件 \n -> 單擊螢幕上方的"新建"按鈕 或 -> 瀏覽螢幕左上方的 File（文件）下拉菜單，然後單擊 New（新建） 或 -> 按 ctrl + N 將打開一個新視窗，詢問要創建的新文件的類型、單位、名稱和位置。默認單位是毫米。 -> 輸入文件的適當名稱和位置，然後單擊“確定”。 \n 2.1.3 打開零件文件 \n ->單擊屏幕頂部的"打開或打開最近的零件按鈕 或 ->瀏覽屏幕左上方的\xa0 File（文件） 下拉菜單，然後單擊 Open。 或 -> 按 ctrl + O 將顯示“打開零件文件”對話框。 右側可預覽文件。 可以通過取消核取方塊“預覽”來禁用“預覽”。 ->取消開啟零件 （檔案）則單擊取消退出開啟現有檔案 \n 2.2 列印、儲存和關閉文件 \n 2.2.1 列印NX 12圖像 \n 要從當前顯示器"列印"圖像， ->點擊文件→列印 下圖顯示了“列印”對話框。可以選擇要使用的印表機或指定編號的列印份數，紙張尺寸等。您還可以為所有三個選擇比例尺寸。 您也可以選擇 通過單擊來列印，即線框實體模型輸出下拉菜單，如右圖所示側 ->取消列印則單擊取消退出列印 \n 2.2.2 保存零件文件 \n ->點擊文件→保存 有五個選項可保存文件： ●保存：此選項將使用創建零件文件時使用的相同名稱將零件保存在屏幕上。 ●僅保存工作零件：此選項僅將活動零件保存在屏幕上。 ●另存為：此選項允許您使用其他名稱和/或類型將零件保存在屏幕上。 默認類型是.prt。 但是，可以將文件另存為 IGES（.igs）、STEP 203（.stp）、STEP 214（.step）、AutoCAD DXF（.dxf）、AutoCAD DWG（.dwg）、CATIA模型（.model）和 CATIA V5（.catpart）。 ●全部保存：此選項將使用現有名稱保存所有打開的零件文件。 ● 保存書籤：此選項會將屏幕上的當前模型的屏幕截圖和上下文另存為.JPEG文件和書籤。 \n 2.2.3 關閉零件文件 \n ->點擊文件→關閉 如果關閉文件，該文件將清除工作記憶和任何更改不保存將丟失。 因此，請記住選擇“保存並關閉”、“另存為並關閉”、"保存所有並關閉"或"保存所有並退出"。 在前三個選項的情況下，已選擇，否則所有零件都將關閉，但NX12會繼續運行。 \n 2.2.4 退出NX12 \n ->單擊文件→退出 如果打開了文件並在未保存的情況下進行了更改，則將詢問是否真的想退出。 ->選擇否，保存文件，然後退出 ->選擇是，不保存文件，退出 \n 2.3 NX12介面 \n 2.3.1.1 滑鼠左鍵（MB1） \n 滑鼠左鍵用於選擇圖標、菜單、和圖形屏幕上的其他實體。 在任何功能上雙擊 MB1 都會自動打開“編輯對話框”。 單擊對像上的 MB1，使用戶可以快速使用如下所示的幾個選項。 這些選項將在下一章中討論。 \n 2.3.1.2 滑鼠中鍵（MB2）->選轉、縮放 \n MB2\xa0 或滾動按鈕用於通過按下來旋轉對象，按住並拖動， 模型繞單個軸旋轉。\xa0 如果您同時按住 MB2 位置幾秒鐘，它將固定旋轉點（出現橙色圓圈符號）您可以在對象周圍拖動以查看。如果是滾動按鈕，則可以通過滾動對象來放大和縮小。 單擊\xa0 MB2 將如果打開了任何彈出窗口或對話框，還可以執行“確定”命令。 \n 2.3.1.3 滑鼠右鍵（MB3） \n MB3 用於訪問用戶界面彈出菜單。 隨後彈出的選項，具體取決於選擇模式和應用。 下圖顯示在草圖中應用。 選擇功能後單擊 MB3 將提供與該功能相關的選項（對象/操作菜單）。單擊 MB3 並按住該按鈕將在功能周圍顯示一組圖標。這些圖標帶有可應用於功能的可能命令。 \n 2.3.1.4按鈕組合 \n 放大/縮小： ->同時按住 MB1 和 MB2 並拖動 或 ->按住鍵盤上的 ctrl\xa0按鈕，然後按住並拖動 MB2 或 平移： ->同時按住 MB2 和 MB3 並拖動 或 ->按住鍵盤上的 shift 按鈕並按住 MB2 菜單快捷方式： ->按住 ctrl + shift 和 MB1、MB2 和 MB3 可以看到功能的快捷方式，直接草圖組和同步建模組 \n 2.3.2 NX12視窗 \n 下圖顯示了打開文件時 NX12 窗口的典型佈局。 這是 NX12 的網關，從中可以選擇要處理的任何模塊，例如建模，必須注意這些工具欄可能不完全在同一位置如下圖所示。 工具欄可以放置在屏幕上的任何位置或位置。查找相同的圖標集。 \n \n 2.3.2.1 功能區欄 \n 功能區界面使用戶能夠輕鬆訪問不同的命令，而無需縮小圖形窗口區域。 命令組織在不同選項卡下的功能區欄中和組，以便於識別和訪問。例如，在上圖所示的功能區欄中，我們具有“起始”，“曲線”等選項卡。 在裡面主頁選項卡中，我們具有直接草圖，特徵，同步建模和曲面組。 並且在每個組中，我們有一組功能強大的命令。 \n 2.3.2.2快速訪問工具欄 \n 快速訪問工具欄具有最常用的按鈕（保存、撤消、重做、剪切、複製、粘貼和最近的命令）以加快建模過程。 您可以輕鬆地將這些按鈕自定義為如下圖所示。 \n 2.3.2.3命令查找器 \n 如果您不知道在哪裡可以找到命令，請使用“命令查找器”。 若忘記了 樣式掃描的位置。 ->在命令查找器中輸入掃描 ->將鼠標懸停在樣式掃描上 ->NX將顯示命令路徑：菜單→插入→掃描→樣式化掃描 或 ->在命令查找器中輸入掃描 ->在命令查找器窗口中單擊樣式化掃描 \n \n 2.3.2.4\xa0頂部 \n 頂部邊框中最重要的按鈕是菜單按鈕。 大部分功能菜單中提供了該軟件的版本。 選擇欄顯示選擇選項。 這些選項包括用於選擇特徵的“過濾器”，“零部件/裝配體”和“捕捉點”。 最“視圖”選項卡中的常用按鈕也顯示在“頂部邊框”中。 \n 2.3.2.5 資源欄 \n 資源欄使用很少的用戶界面就可以在一處顯示多個頁面的圖標空間。 NX 12將所有導航器窗口（裝配體、約束和零件）放置在資源欄中、以及重用庫、HD3D工具、Web 瀏覽器、歷史記錄面板、Process Studio、製造嚮導、角色和系統場景。 兩個最重要的寡婦是解釋如下。 \n 零件導航器 ->單擊零件瀏覽器圖標，第三個資源欄頂部的圖標零件導航器提供可視化表示要素中的父子關係以樹型格式在單獨的窗口中工作。 它顯示了在此期間使用的所有原語，實體造型。它允許您執行各種編輯這些功能上的操作。例如，您可以使用零件導航器來抑製或取消抑制功能或更改其參數或位置尺寸。刪除綠色的勾號將“取消”功能。該軟件會給警告如果父子關係被打破取消任何特定功能。 零件瀏覽器可用於所有NX應用程序而不僅僅是建模。但是，您只能執行功能編輯操作當您在“建模”模塊中時。在零件瀏覽器中編輯特徵將自動更新模型。特徵編輯將在後面討論。 歷史 ->單擊歷史記錄圖標，資源欄頂部的第七個圖標歷史選項板提供對最近打開的文件或其他選項板條目的快速訪問。有可能用於重新加載最近處理過的零件或重複添加一小組調色板項目的模型。 歷史選項板會記住上一次使用的選項板選項以及會話的狀態當它關閉時。 NX存儲已加載到會話中的選板並將其還原到下屆會議。移動零件時，系統不會清除歷史記錄選板。 \n 2.3.2.6 提示線 \n 提示行顯示提示消息，指示接下來需要採取的行動。在 - 的右邊 提示行，狀態行位於顯示有關當前選項的消息或最近完成的功能。 進度表顯示在提示行中當系統執行耗時的操作，例如加載大型裝配體。的 儀表顯示的操作百分比完成了。操作完成後，系統顯示下一個適當的提示。 \n 2.3.3 幾何選擇 \n 可以選擇過濾方法，這有助於在緊密的模型中輕鬆選擇幾何。NX12操作選項取決於所選實體。項目的選擇可以基於實體的程度，例如選擇幾何實體，特徵和零部件。選擇方法可以選擇 選擇選擇工具欄中的圖標之一。 \n 2.3.3.1特徵選擇 \n 單擊任何圖標，可以選擇零件文件中的特徵。它不會選擇基本實體，例如邊緣，面等。選定的特徵也可以應用於一部分或整個根據要求組裝。除此之外，可以進一步縮小特徵的過濾範圍在下拉菜單中選擇所需選項之一，如 數字。 例如，選擇“曲線”將僅高亮顯示屏幕。 默認值為“無選擇過濾器”。 \n 2.3.3.2常規對象選擇 \n 將鼠標光標導航到實體附近，直到用突出顯示它為止洋紅色，然後單擊鼠標左鍵以選擇任何幾何實體，功能或組件。如果要選擇隱藏在顯示的幾何圖形後面的實體，將鼠標光標放在屏幕上該區域附近，以便光標球佔據了投影在屏幕上的隱藏幾何的一部分屏幕。幾秒鐘後，球形光標變為加號如圖所示。單擊鼠標左鍵（MB1）以獲取選擇確認對話框，如下圖如下。 \n \n 這個 QuickPick 菜單由實體列表組成捕獲在光標的球內。的實體按以下升序排列實體的程度。例如，邊和頂點指定為較低給出立體的數字更高的數字。通過移動光標顯示的數字，NX12將用洋紅色突出顯示屏幕上的相應實體。 \n 2.3.4 使用者偏好 2.3.5 應用 \n 可以使用“文件”選項打開應用程序位於主窗口的左上角或功能區欄上方的“應用程序”選項卡。 可以選擇要運行的應用程序類型。例如，可以選擇“建模”、“製圖”、"組裝"。 \n 2.4 圖層 \n 圖層用於將對象存儲在文件中，並將對象收集到文件中。有條理和一致的方式。與簡單的視覺工具（例如顯示和隱藏），圖層提供一種永久的方式來組織和管理文件中對象的可見性和選擇性。 \n 2.4.1 圖層控制 \n 使用NX 12，您可以使用“圖層”控制對像是可見還是可選。一層是NX 12中所有對象必須具有的系統定義的屬性，例如顏色，字體和寬度。那裡NX 12中有256個可用層，其中之一始終是工作層。 256個圖層中的任何一個都可以被分配給四種狀態分類之一。 •工作 •可選 •僅可見 •不可見 工作層始終可見並且可以選擇。啟動新零件文件時，第1層是默認的工作層。當工作層更改為另一種類型的圖層時，先前的工作層會自動變為“可選”狀態，然後將其分配為“僅可見”或“不可見”狀態。可以在一圖層上的對像數量不受限制。可以自由選擇要創建的圖層對象及其所在層的狀態。要將狀態分配給一個或多個圖層， ->選擇查看→圖層設置 但是，應該注意，在關於圖層將有利於保持一致性文件之間。 \n \n 2.4.2 分層命令 \n 練習“圖層”中的命令。 首先，我們將創建兩個模型按如下方法處理。\xa0 ->選擇文件→新建、命名檔案並選擇要在其中保存文件的文件夾。 選擇單位為毫米。 選擇文件類型作為模型 ->選擇菜單→插入→設計特徵→錐 ->在類型下選擇直徑和高度 ->點擊確定 ->右鍵單擊屏幕，然後選擇“東方視圖”→Trimetric ->右鍵單擊屏幕，然後選擇“渲染”。樣式→陰影 您將能夠看到類似於圖片的實心圓錐在右邊。 現在讓我們練習一些圖層命令。 ->選擇查看→移動到圖層 系統將要求您選擇一個對象 ->將光標移到圓錐上並單擊，使其突出顯示 ->點擊確定 ->在窗口頂部的“目標圖層”或“類別”空間中，鍵入25，然後單擊“確定”。 好圓錐現在已經到達第25層。 它不再是在第1層中看到。 ->要查看圓錐體，請單擊查看→圖層設置 ->可以看到第25層有對象，而默認的工作層1沒有對象。錐體將再次出現在屏幕上。 儲存檔案，因為我們將在本教程的後面部分中使用它。 \n 2.5 座標系統 \n 2.5.1 絕對坐標系（CSYS） \n 代表絕對坐標系的模型 \n \n 2.5.2 工作坐標系（WCS） \n 工作坐標系（WCS）是您要用於構造時要使用的確定特徵的方向和角度。 WCS的軸表示為XC，YC和ZC。（“ C”代表“當前”）。它是可能有多個坐標零件文件中的系統，但其中只有一個可以是工作坐標系。 \n 2.5.3 移動 WCS \n 移動和旋轉 WCS ->選擇菜單→格式→ WCS \n \n 2.6 工具列 \n', 'tags': '', 'url': 'CH2 入門.html'}, {'title': 'CH3 二維草圖', 'text': '3.1 \n 3.2 \n 3.3 \n 3.4 \n 3.5 \n 3.6 \n', 'tags': '', 'url': 'CH3 二維草圖.html'}, {'title': 'CH4 三維建模', 'text': '4.1 \n 4.2 \n 4.3 \n 4.4 \n 4.5 \n 4.6 \n 4.7 \n 4.8 \n 4.9 \n', 'tags': '', 'url': 'CH4 三維建模.html'}, {'title': 'CH5 出圖', 'text': '5.1 \n 5.2 \n 5.3 \n 5.4 \n 5.5 \n 5.6 \n 5.7 \n', 'tags': '', 'url': 'CH5 出圖.html'}, {'title': 'CH6 組立', 'text': '6.1 \n 6.2 \n 6.3 \n 6.4 \n 6.5 \n 6.6 \n', 'tags': '', 'url': 'CH6 組立.html'}, {'title': 'CH7 曲面建模', 'text': '7.1 \n 7.2 \n 7.3 \n', 'tags': '', 'url': 'CH7 曲面建模.html'}, {'title': 'CH8 有限元素分析', 'text': '8.1 \n 8.2 \n 8.3 \n 8.4 \n 8.5 \n 8.6 \n 8.7 \n 8.8 \n', 'tags': '', 'url': 'CH8 有限元素分析.html'}, {'title': 'CH9 加工模擬', 'text': '9.1 \n 9.2 \n 9.3 \n 9.4 \n 9.5 \n', 'tags': '', 'url': 'CH9 加工模擬.html'}, {'title': 'w15', 'text': '使用配置好的 cad.bat 來更新近端動態網頁，再使用 cadh.bat 開啟 8444 檢視 近端靜態網頁確認內容無誤，再 add commit push 推上到 GitHub 倉儲。 \n \n', 'tags': '', 'url': 'w15.html'}, {'title': 'w16', 'text': '將 solvespace 零件放到 V-rep 和 webots ,由於我的 solvespace 沒有 wrl 的檔案選項，因此沒放到 webots 裡面 ', 'tags': '', 'url': 'w16.html'}]};