const images = [
    `<li class="image"><a href=""><img src="images/banner01.png" alt="이벤트 배너"></a></li>`,
    `<li class="image"><a href=""><img src="images/banner01.png" alt="이벤트 배너"></a></li>`,
    `<li class="image"><a href=""><img src="images/banner01.png" alt="이벤트 배너"></a></li>`
];

let index = 0; // 초기 인덱스값
const imageLength = images.length;
const next = $('.banner .next');
const prev = $('.banner .prev');
const bannerBox = $('.banner .box');

bannerBox.html(images);
const imageWidth = $('.image img').width(); // 이미지 너비 가져오기

next.on('click', function() {
    if(index < imageLength - 1){ // 인덱스가 이미지 배열의 길이보다 작을 때만 증가
        index++; // 다음 이미지 인덱스 증가
        bannerBox.css('left', `-${imageWidth * index}px`); // left 속성 설정
        prev.removeClass('dis'); // 이전 버튼 활성화
    } else {
        next.addClass('dis'); // 다음 버튼 비활성화
    }
});

prev.on('click', function() {
    if(index > 0){ // 인덱스가 0보다 클 때만 감소
        index--; // 이전 이미지 인덱스 감소
        bannerBox.css('left', `-${imageWidth * index}px`); // left 속성 설정
        next.removeClass('dis'); // 다음 버튼 활성화
    } else {
        prev.addClass('dis'); // 이전 버튼 비활성화
    }
});

