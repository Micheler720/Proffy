import React from 'react';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import Landing from './pages/Landing';
import TeacherForm from './pages/TeacherForm';
import TeacherList from './pages/TeacherList';
import SubjectForm from './pages/SubjectForm';
import Login from './pages/Login';
import RegisterAccount from './pages/RegisterAccount';
import Menssage from './Components/Menssage';
import ForgotPassword from './pages/ForgotPassword';
import Profile from './pages/Profile';

function Routes (){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login}></Route>
            <Route path="/Landing" exact component={Landing}></Route>
            <Route path="/study" exact component={TeacherList}></Route>
            <Route path="/give-classes" exact component={TeacherForm}></Route>
            <Route path="/subjects" exact component={SubjectForm}></Route>
            <Route path="/registerAccount" exact component={RegisterAccount}></Route>
            <Route path="/Menssage" exact component={Menssage}></Route>
            <Route path="/forgotPassword" exact component={ForgotPassword}></Route>
            <Route path="/profile" exact component={Profile}></Route>
        </Switch>
        </BrowserRouter>
    );
}
export default Routes;
