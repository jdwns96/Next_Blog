# FROM: 베이스 이미지 사용
FROM ubuntu:16.04

# MAINTAINER: 개발자 정보
MAINTAINER "djjng3@gmail.com"

# RUN : 해당 명령어 실행, 필요한 패키지를 설치 
RUN apt-get update -y && \
    apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_14.x | bash && \
    apt-get install -y nodejs 
    
# COPY: 현재 경로(.)에 존재하는 파일들을 이미지 /app 경로에 모두 추가 
COPY . /app

# WORKDIR: 작업 디렉토리 변경. 셸 cd /app 과 같은 기능 
WORKDIR /app

# RUN: 명령어 실행. 복사된 requirements.txt 파일로 pip로 필요 라이브러리 설치 
# RUN pip install -r requirements.txt
RUN npm i 
RUN npm run build

# EXPOSE: 컨테이너 실행 시 노출될 포트  
EXPOSE 5000

# ENTRYPOINT: 컨테이너 시작 시 기본으로 실행되는 명령어 
# ENTRYPOINT [ "python" ]

# CMD: 컨테이너 시작 시 실행되는 명령어로 위 ENTRYPOINT 명령어 뒤 인자로 실행하게 된다. 
# 결국 python app.py 명령어 실행 
CMD [ "npm", "start" ]


# docker build [OPTIONS] 도커파일경로

# docker build -t next:0.1 .

# docker run -it -d -p 8080:3000 --name next_container next:0.1 