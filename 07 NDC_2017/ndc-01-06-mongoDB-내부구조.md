## 대상
- 기본적인 MongoDB 써본 개발자
- MongoDB 3.4 기준

## MongoDB 기본 내용
문서단위로 존재함  
mysql : mongodb = table-row-column : collection-document-field  
insert, select 등의 실행 방식도 다름  
스토리지엔진을 선택할 수 있음

## 스토리지엔진
### MMAPv1
- power of 2 sized allocate  
  최초 쿼리는 조금 느림 -> 처음에 풀스캔 해줘야함
- in-place update : 도큐먼트를 넣을 떄 안쓰는 필드라도 기본값을 채워넣어주면 효율적임

### WiredTiger
- document level concurrency
- no in-place update
- compression  
  쌓기만 하는 데이터에 유리, 3.2버전 이상

## 인덱스
모르겠다~

## 쿼리
도 모르겠다~

UX나 들을걸 그랬나~