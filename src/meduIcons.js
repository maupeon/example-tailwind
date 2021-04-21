import {GiScalpel} from 'react-icons/gi';
import {BsPen, BsNewspaper,BsChat,BsBook, } from 'react-icons/bs'
import {RiSurgicalMaskLine, RiArticleLine, RiKakaoTalkLine} from 'react-icons/ri'
import {GiTeacher} from 'react-icons/gi'
import {FaChalkboardTeacher, FaPodcast} from 'react-icons/fa'
import {ImNewspaper} from 'react-icons/im'
import {BiSelectMultiple} from 'react-icons/bi'

export  const meduIcons ={
        qx:  <GiScalpel color='white' size='32'/>, 
        dx:<BsPen color='white' size='32' /> , 
        cases:<BiSelectMultiple color='white' size='32' /> , 
        talks:  <BsChat color='white' size='32' /> , 
        articles: <BsBook color='white' size='32' />, 
        courses: <FaChalkboardTeacher color='white' size='32' />, 
        news:<ImNewspaper color='white' size='32' />}


export  const meduIcons2 ={
    qx:   GiScalpel, 
    dx: BsPen  , 
    cases: BiSelectMultiple  , 
    talks:   BsChat  , 
    articles:  BsBook , 
    courses: FaChalkboardTeacher, 
    news: ImNewspaper,
    podcast : FaPodcast

}