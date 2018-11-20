# IPFS ( InterPlanetary File System )

* 特性
  * P2P ( peer-to-peer ) 分散式檔案系統
  * 透過 IPFS 軟體能提供檔案給 IPFS 網路上的其他電腦，亦可從 IPFS 網路上的其他電腦取得檔案

* IPFS address
  * 每個被加入到 IPFS 系統中的檔案都會得到一個獨一無二的 address，其 address 來自於檔案內容的 hash
  
* 安裝
  * 下載
    * MacOS 
      * wget https://dist.ipfs.io/go-ipfs/v0.4.18/go-ipfs_v0.4.18_darwin-amd64.tar.gz
    * Linux
      * wget https://dist.ipfs.io/go-ipfs/v0.4.18/go-ipfs_v0.4.18_linux-amd64.tar.gz    
  * 解壓縮
    * MacOS
      * tar -zxvf go-ipfs_v0.4.18_darwin-amd64.tar.gz
    * Linux
      * tar -zxvf go-ipfs_v0.4.18_linux-amd64.tar.gz
  * 切換工作路徑
    * cd go-ipfs
  * 安裝 IPFS
    * sudo ./install.sh
   
  * 【 官網 】 
    * https://dist.ipfs.io/#go-ipfs

---

* 基本操作
  * 初始化
    * ipfs init
  * 顯示 IPFS Node 資訊
    * ipfs id
  * 將檔案放進 IPFS 系統
    * ipfs add 檔案名稱 
  * 添加目錄中的檔案到 IPFS
    * ipfs add -r 目錄名稱
  * 取得檔案內容
    * ipfs cat 檔案的 Hash
  * 同步節點
    * ipfs daemon
    * https://ipfs.io/ipfs/檔案的 Hash

---

* 建立私有 IPFS
