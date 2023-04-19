import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    mainDiv :{
        width:'450px',
        height:'500px',
        margin:'220px 735px',    
        border:'1px solid #e9eaed',
        borderRadius:'10px'
    },
   
    div5 :{
        paddingTop:'1px'
    },
    div4 :{
        paddingTop:'30px'
    },
    div2 :{
        width:'80%',
        marginLeft:'40px',
        marginRight:'40px',
        paddingTop:'30px',
    },
    div3 :{
        paddingTop:'30px',
        marginLeft:'7%',
        marginRight:'10%',
        width:'80%',
        height:'100px'
    },
    link1 :{
        textDecoration:'none',
        color:'DodgerBlue',
        marginLeft:'0px',
        fontSize:'14px'
    },
    btn1 :{
        textDecoration:'none',
        color:'DodgerBlue',
        float:'left',
    },
    btn :{
        alignContent:'center',
        backgroundColor:'DodgerBlue',
        float:'right',
        width:'80px',
        height:'35px'
    },
    img1 :{
        width:'75px',
        height:'24px',
        paddingTop:'45px',
        paddingBottom:'1px'
    },
    bottomDiv :{
        width:'30%',
        marginTop:'10px',
        marginLeft:'35%',
        marginRight:'35%', 
    },
    signinDiv :{
        fontFamily:'roboto',
        fontSize:'24px',
        fontWeight:'400px',
        color:'#202124',
        marginTop:'15px'
    },
    textDiv :{
        ontFamily:'roboto, "Noto Sans Myanmar UI",arial,sans-serif',
        fontSize:'16px',
        fontWeight:'400px',
        color:'#202124',
        marginTop:'10px'
    },
    textDiv2 :{
        ontFamily:'roboto, "Noto Sans Myanmar UI",arial,sans-serif',
        fontSize:'14px',
        fontWeight:'400px',
        color:'#5F6368',
        padding:'9px 0px 3px',
        marginTop:'50px'
    },
    link2 :{
        textDecoration:'none',
        color:'DodgerBlue',
        marginLeft:'0px',
        fontSize:'14px'
    },
}))

export default useStyles;