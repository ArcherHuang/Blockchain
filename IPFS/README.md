## 學習目標
* IPFS 概念
* IPFS 指令
* 建立私有 IPFS

## Contents
- [IPFS 概念](#ipfs)
- [安裝](#安裝)
- [基本操作](#基本操作)
- [建立私有 IPFS](#建立私有-ipfs)

## IPFS
[Top](#contents)

* 英文
  * **I**nter**P**lanetary **F**ile **S**ystem
  
* 中文
  * 星際檔案系統

* 目的
  * 用來取代集中化的 HTTP
  
* 特性
  * P2P ( peer-to-peer ) 分散式檔案系統
  * 透過 IPFS 軟體能提供檔案給 IPFS 網路上的其他電腦，亦可從 IPFS 網路上的其他電腦取得檔案

* 結構
  * 索引結構是 DHT（ Distributed Hash Table, 分散式雜湊表 ）
  * 資料結構是 Merkle DAG（ Merkle Directed Acyclic Graph, 有向無環圖 ）

* IPFS address
  * 每個被加入到 IPFS 系統中的檔案都會得到一個獨一無二的 address，其 address 來自於檔案內容的 hash
  * IPFS 的 address 是由 multihash 所組成，其 multihash 共分成 3 個部份，第一部份為所使用的 hash 演算法，第二部份為 hash 的長度，第三部份為 hash function 的輸出結果
  * hash 演算法為 SHA-256，並預設使用 Base58 進行編碼
  * 型式
    * 舉例：將內容為【 hello world 】的【 test-file.txt 】檔案傳送到 IPFS
      * 【 指令 】 echo 'hello world' > test-file.txt
      * 【 指令 】 ipfs add test-file.txt
        * 【 指令執行完顯示的結果 】 
           <br> &nbsp;&nbsp;added QmT78zSuBmuS4z925WZfrqQ1qHaJ56DQaTfyMUF7F8ff5o test-file.txt
    * hash ( 長度為 46 )
      * base58(<hash 演算法><hash 的長度><hash function 的輸出結果>)
        * base58(122046d44814b9c5af141c3aaab7c05dc5e844ead5f91f12858b021eba45768b4c0e)
          * hash 演算法
            * SHA2-256 的编碼為 0x12
          * hash 的長度
            * 為 32 bytes（ 十六進制為 0x20 ）
          * hash function 的輸出結果
            * hello world 的 hash 為 46d44814b9c5af141c3aaab7c05dc5e844ead5f91f12858b021eba45768b4c0e
              * file gets chunked into 256KiB pieces
              * each chunk goes into a DAG node inside a Unixfs protobuf <br> https://github.com/ipfs/js-ipfs-unixfs
              * a dag is created with links to all the chunks.
            * 指令
              * ipfs block get QmT78zSuBmuS4z925WZfrqQ1qHaJ56DQaTfyMUF7F8ff5o  | sha256sum
        * 計算完的結果為 QmT78zSuBmuS4z925WZfrqQ1qHaJ56DQaTfyMUF7F8ff5o
          * Qm 代表使用 SHA-256 演算法且 32 bytes 長
       * 程式碼
       ![](https://oranwind.s3.amazonaws.com/2018/Nov/_____2018_11_20___2_44_25-1542696310515.png)
  * IPNS
    * IPNS 可以讓我節點域名空間建立一個相對應的 IPFS hash

---

* Base58
  * 特性
    * Bitcoin 用來產生錢包 address 的編碼方式
    * 不使用易於混淆文字
      * 例如: 數字【 0 】、字母大寫【 O 】、字母大寫 i【 I 】、字母小寫 L【 l 】與【 + 】、【 / 】符號
      * 換句話說 Base58 是由不包括（ 0、O、l、I ）的大小寫字母和數字所组成的
      * 字元集為 9 個數字、24 個大寫字母、25 個小寫字母

  * Base58 表格
![](https://oranwind.s3.amazonaws.com/2018/Nov/_____2018_11_26___4_03_03-1543219405525.png)

  * Node.js 程式 [【 Link 】](https://github.com/ArcherHuang/Blockchain/blob/master/IPFS/Code/compute_Base58_Encoding.js)
![](https://oranwind.s3.amazonaws.com/2018/Nov/_____2018_11_26___2_37_48-1543214417169.png)

---

* SHA-256
  * 特性

---

* Distributed Hash Table (DHT)
  * 特性
  
* Chord protocol
  * 特性

---

* Merkle Trees
  * 特性
    * 也被稱為 Hash Tree
    * 樹葉節點存放資料節點的 Hash 值
    * 非樹葉節點的數值是經由下層節點計算出 Hash 而得的。
    
  ![](https://oranwind.s3.amazonaws.com/2018/Nov/_____2018_11_21___9_13_23-1542762841787.png)
  
  [merkle](https://people.eecs.berkeley.edu/~raluca/cs261-f15/readings/merkle.pdf)
  [Ever Wonder How Merkle Trees Work?](https://media.consensys.net/ever-wonder-how-merkle-trees-work-c2f8b7100ed3)

---

* Directed Acyclic Graph (DAG)
  * 特性
  
---

## 安裝
[Top](#contents)

  * 下載
    * macOS 
      * wget https://dist.ipfs.io/go-ipfs/v0.4.18/go-ipfs_v0.4.18_darwin-amd64.tar.gz
    * Linux
      * wget https://dist.ipfs.io/go-ipfs/v0.4.18/go-ipfs_v0.4.18_linux-amd64.tar.gz  
    * Windows
      * https://dist.ipfs.io/go-ipfs/v0.4.18/go-ipfs_v0.4.18_windows-amd64.zip
  * 解壓縮
    * macOS
      * tar -zxvf go-ipfs_v0.4.18_darwin-amd64.tar.gz
    * Linux
      * tar -zxvf go-ipfs_v0.4.18_linux-amd64.tar.gz
  * 切換工作路徑
    * macOS & Linux
      * cd go-ipfs
  * 安裝 IPFS
    * macOS & Linux
      * sudo ./install.sh
   
  * 【 官網 】 
    * https://dist.ipfs.io/#go-ipfs

---

## 基本操作
[Top](#contents)

  * 初始化
    * ipfs init
  *
    * ipfs help
  * 顯示 IPFS Node 資訊
    * ipfs id
  * 將檔案放進 IPFS 系統
    * echo "test 181122" > mytextfile.txt
    * ipfs add 檔案名稱 
  * 添加目錄中的檔案到 IPFS
    * ipfs add -r 目錄名稱
  * 取得檔案內容
    * ipfs cat 檔案的 Hash
    * ipfs cat Hash1 Hash2 Hash3 Hash4 Hash5 > fileName
  * 同步節點
    * ipfs daemon
    * http://127.0.0.1:5001/webui
    
    ![](https://oranwind.s3.amazonaws.com/2018/Nov/_____2018_11_21___9_48_57-1542765000227.png)
    
    * https://ipfs.io/ipfs/檔案的 IPFS hash
    * https://gateway.ipfs.io/ipfs/QmT78zSuBmuS4z925WZfrqQ1qHaJ56DQaTfyMUF7F8ff5o
  * 讓目錄長期存在 ( IPFS 會自動做 Garbage Collection 以防止 Local 檔案佔用太多空間 )
    * ipfs pin add -r 
  * 將節點域名空間建立一個相對應的 IPFS hash
    * ipfs name publish 
  *
    * ipfs files ls
  *
    * ipfs files cp  
  *
    * ipfs files read 
  *
    * ipfs files rm  
  *
    * ipfs files rm -r 
  *
    * ipfs files help
  * Read the content out of IPFS
    * ipfs cat QmZtmD2qt6fJot32nabSP3CUjicnypEBz7bHVDhPQt9aAy
  *
    * echo "version 1 of my text" | ipfs add
  *
    * cat mytextfile.txt | ipfs add
  * Pipe content from IPFS into a File
    * ipfs cat QmTudJSaoKxtbEnTddJ9vh8hbN84ZLVvD5pNpUaSbxwGoa > mytextfile.txt
  * Get File from IPFS
    * ipfs get QmPe4Hp19dDPFDf5TABYethfxd5PtoSEgbNzJuWJcSnT6S
  *
    * ipfs id
  *
    * ipfs version
  *
    * ipfs config show
  *
    * ipfs bootstrap add --default
  *
    * ipfs bootstrap list >save
  *
    * ipfs bootstrap list
  *
    * ipfs daemon --enable-pubsub-experiment
  *
    * ipfs pubsub pub "Test" "Hi"
  *
    * ipfs pubsub sub "Test"
  *
    * ipfs ls -v Hash
  *
    * ipfs object get Hash
  
  * https://docs.ipfs.io/reference/api/cli/#ipfs-pubsub
---

* Centralized、Decentralized、Distributed

---

* ShapeShift

---

* argon2

---

* HTTP 206

---

* HTTP Live Streaming

---

## 建立私有 IPFS
[Top](#contents)

  * 示意圖
 
  ![](https://oranwind.s3.amazonaws.com/2018/Nov/_____2018_11_22___4_43_02-1542876201203.png)

  * 建立 2 台 AWS EC2 的 Ubuntu Node
    
  * 安裝 IPFS
    * 建立名為 ipfs 資料夾並切換路徑到 ipfs 資料夾中
      * mkdir ipfs && cd ipfs
    * 下載 IPFS 安裝檔
      * wget https://dist.ipfs.io/go-ipfs/v0.4.18/go-ipfs_v0.4.18_linux-amd64.tar.gz
    * 解壓縮
      * tar -zxvf go-ipfs_v0.4.18_linux-amd64.tar.gz
    * 切換路徑到 go-ipfs
      * cd go-ipfs
    * 執行安裝的 Script
      * sudo ./install.sh
    * ipfs 初始化
      * ipfs init
   
  * 安裝 Go  
    * sudo apt-get update
    * curl -O https://storage.googleapis.com/golang/go1.9.3.linux-amd64.tar.gz
    * tar -xvf go1.9.3.linux-amd64.tar.gz
    * sudo chown -R root:root ./go
    * sudo mv go /usr/local
    * vi ~/.profile
      * [i]
      * export GOPATH=$HOME/go
      * export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin
      * [esc]
      * :wq!
    * source ~/.profile
   
  * 產生私鑰
    * go get github.com/Kubuxu/go-ipfs-swarm-key-gen/ipfs-swarm-key-gen
    * ipfs-swarm-key-gen > ~/.ipfs/swarm.key
   
  * 將私鑰送到 Node-2
    * scp -i Go.pem ~/.ipfs/swarm.key ubuntu@34.205.157.212:~/.ipfs/
  
  * 清空預設自動連接到main network上的peer
    * [Node-1] 
      * ipfs bootstrap rm --all
      * ipfs bootstrap add /ip4/[Node-1-IP]/tcp/4001/ipfs/[Node-1-ID]
      * export LIBP2P_FORCE_PNET=1
      * ipfs daemon &
    * [Node-2]   
      * ipfs bootstrap rm --all
      * ipfs daemon &
      
    * [Node-1]   
      * ipfs bootstrap rm --all
      * ipfs config show
      * ipfs config Addresses.API /ip4/0.0.0.0/tcp/5001
      * ipfs config Addresses.Gateway /ip4/0.0.0.0/tcp/8080
      * 設定環境變數
        * 【 Linux 】 export LIBP2P_FORCE_PNET=1
        * 【 Windows 】 set LIBP2P_FORCE_PNET=1
      * Reboot
      * ipfs daemon
      * ipfs id
      * ipfs swarm peers
      * echo "test 181122" > mytextfile.txt
      * ipfs add mytextfile.txt
    * [Node-2]  
      * ipfs bootstrap rm --all
      * ipfs config show
      * ipfs config Addresses.API /ip4/0.0.0.0/tcp/5001
      * ipfs config Addresses.Gateway /ip4/0.0.0.0/tcp/8080
      * 設定環境變數
        * 【 Linux 】 export LIBP2P_FORCE_PNET=1
        * 【 Windows 】 set LIBP2P_FORCE_PNET=1
      * Reboot
      * ipfs daemon
      * ipfs bootstrap add /ip4/Node-1-IP/tcp/4001/ipfs/Node-1-ID
      * ipfs swarm peers
      
  * Check
    * [Node-1] 
      * ipfs swarm peers
    * [Node-2]      
      * ipfs swarm peers
  * 測試
    * [Node-1] 產生 2g 大檔
      * time sh -c 'dd if=/dev/zero iflag=count_bytes count=2G bs=1M of=large; sync'
      
      ![](https://oranwind.s3.amazonaws.com/2018/Nov/_____2018_11_26___10_41_00-1543200287331.png)
      
      * ipfs add large
      
      ![](https://oranwind.s3.amazonaws.com/2018/Nov/_____2018_11_26___10_42_33-1543200307088.png)
      
    * [Node-2]   
      * ipfs get large's Hash

      ![](https://oranwind.s3.amazonaws.com/2018/Nov/_____2018_11_26___10_43_50-1543200327772.png)

  ---
* [Node-1][Node-2]
* ipfs init
* ipfs bootstrap rm --all
* ipfs config show
* "API": "/ip4/127.0.0.1/tcp/5001",
* "Gateway": "/ip4/127.0.0.1/tcp/8080"

* ipfs config Addresses.API /ip4/0.0.0.0/tcp/5001
* ipfs config Addresses.Gateway /ip4/0.0.0.0/tcp/8080

* export LIBP2P_FORCE_PNET=1
* systemctl restart ipfsd
* systemctl status ipfsd

* ipfs daemon &
* ipfs id

* [Node-2] 
* ipfs bootstrap add /ip4/54.84.2.23/tcp/4001/ipfs/QmVXSmGCnojp24srTG7tSCce8yYhnS3s7C5sMWdrMSBhM8
* ipfs swarm peers
