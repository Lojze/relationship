/*
 * 关系合称 - 两个人之间的关系合称
*/
export default {
    'f#s':['父子'],
    'm#s':['母子'],
    'f#d':['父女'],
    'm#d':['母女'],
    'h#w':['夫妻'],
    'ob#lb':['兄弟'],
    'ob#ls':['兄妹'],
    'os#ls':['姐妹'],
    'os#lb':['姐弟'],
    'w,f#d,h':['翁婿'],
    'w,m#d,h':['母婿'],
    'h,f#s,w':['翁媳'],
    'h,m#s,w':['婆媳'],
    '[f|m],[f|m]#[s|d],[s|d]':['祖孙'],
    'f,xb#xb,[s|d]':['叔侄'],
    'f,xb,w#h,xb,[s|d]':['婶侄'],
    'f,xs#xb,[s|d]':['姑侄'],
    'f,xs,h#w,xb,[s|d]':['姑侄'],
    'm,xb#xs,[s|d]':['舅甥'],
    'm,xb,w#h,xs,[s|d]':['舅甥'],
    'm,xs#xs,[s|d]':['姨甥'],
    'm,xs,h#w,xs,[s|d]':['姨甥'],
    'f,xb,s&o#f,xb,s&l':['堂兄弟'],
    'f,xb,s&o#f,xb,d&l':['堂兄妹'],
    'f,xb,d&o#f,xb,s&l':['堂姐弟'],
    'f,xb,d&o#f,xb,d&l':['堂姐妹'],
    'f,xs,s&o#m,xb,s&l':['表兄弟'],
    'm,xb,s&o#f,xs,s&l':['表兄弟'],
    'f,xs,s&o#m,xb,d&l':['表兄妹'],
    'm,xb,s&o#f,xs,d&l':['表兄妹'],
    'f,xs,d&o#m,xb,d&l':['表姐妹'],
    'm,xb,d&o#f,xs,d&l':['表姐妹'],
    'f,xs,d&o#m,xb,s&l':['表姐弟'],
    'm,xb,d&o#f,xs,s&l':['表姐弟'],
    'm,xs,s&o#m,xs,s&l':['姨兄弟'],
    'm,xs,s&o#m,xs,d&l':['姨兄妹'],
    'm,xs,d&o#m,xs,s&l':['姨姐弟'],
    'm,xs,d&o#m,xs,d&l':['姨姐妹'],
    'h,ob,w#h,lb,w':['妯娌'],
    'w,os,h#w,ob,h':['连襟','连桥'],
    'xs,h#w,xb':['郎舅'],
    'xs,h#w,xs':['郎姨'],
    'xb,w#h,xb':['叔嫂'],
    'xb,w#h,xs':['姑嫂'],
    'd,h,[f|m]#s,w,[f|m]':['儿女亲家'],
}
