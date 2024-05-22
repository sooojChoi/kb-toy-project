
// // data를 json 배열로 만들다
// let guestbooks = [
//     {
//         id:1,
//         title: "놀러옴",
//         writer:"홍길동",
//     },
//     {
//         id:2,
//         title: "부활",
//         writer:"누구였지",
//     },
//     {
//         id:3,
//         title: "구의 증명",
//         writer:"김영희",
//     }

// ]

// var express = require('express');
// var router = express.Router();

// router.get("/list", (req, res)=>{
//     // views/guestbook/guestbook_list.ejs 파일을 불러온다. 
//     res.render("guestbook/guestbook_list", {list: guestbooks});
// });


// router.get("/view/:id", (req, res)=>{
//     let id = req.params.id;
//     // 배열에서 해당 id값을 갖는 요소를 반환한다. 
//     let result = guestbooks.filter((item)=>item.id==id);

//     // 첫번째거 하나만 전송한다. 
//     res.render("guestbook/guestbook_view", {view:result[0]});
// });

// router.get("/write", (req, res)=>{

//     // 페이지 이동용으로만 사용한다. 
//     res.render("guestbook/guestbook_write");
// });

// router.post("/save", (req, res)=>{
//     let id = guestbooks[guestbooks.length-1].id+1;
//     let title = req.body.title;
//     let writer = req.body.writer;

//     // 등록 후에는 ejs 파일 전송이 아니고 다른 페이지로 이동한다. 
//     guestbooks.push({id:id, title:title, writer:writer});
//     res.redirect("/guestbook/list");
// })


var express = require('express');
var router = express.Router();

router.get("/contact", (req, res)=>{
    res.render("home/home_contact");
});
router.get("/home", (req, res)=>{
    res.render("home/home_home");
});

module.exports = router;
