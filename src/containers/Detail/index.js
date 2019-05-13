import React,{ Component } from 'react' ;
import './index.scss';

// import remark from 'remark';
// import reactRenderer from 'remark-dom';
const detail = {
    title : "大黄蜂",
    main : "葛之覃兮，施于中谷，维叶萋萋。黄鸟于飞，集于灌木，其鸣喈喈。葛之覃兮，施于中谷，维叶莫莫。是刈是濩，为絺为綌，服之无斁。言告师氏，言告言归。薄污我私，薄浣我衣。害浣害否？归宁父母。"
}
class Detail extends Component{
    render(){
        return(
            <div className = "Detail-block">
                <div className="detail-title-block">{detail.title}</div>
                <div className="detail-content-block">
                    <div className="detail-article-page">{detail.main}</div>
                    <div className="detail-comment-block">
                        <div className="detail-all-comment-title">评论</div>
                        <div className="detail-write-comment-block">
                            <textarea className="detail-comment-write" placeholder="开始评论"></textarea>
                            <div className="detail-comment-add-other">
                                <div className="comment-add-other-block">
                                    <span className="add-other-img"></span>
                                    <span className="add-other-faceIcon"></span>
                                </div>
                                <div className="comment-add-publish">
                                    <span className="add-publish-icon"></span>
                                    <span className="add-publish-btn">发表</span>
                                </div>
                            </div>
                        </div>
                        <div className="detail-all-comments">
                        
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Detail;
