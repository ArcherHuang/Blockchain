# IPFS ( InterPlanetary File System )
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

* 操作
  * 初始化
    * ipfs init
  * 顯示 IPFS Node 資訊
    * ipfs id
  * 將檔案放進 IPFS 系統
    * ipfs add 檔案名稱 
  * 取得檔案內容
    * ipfs cat 檔案的 Hash
  * 連上公有 IPFS
    * ipfs daemon
