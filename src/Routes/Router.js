import { createBrowserRouter, createHashRouter } from "react-router-dom";
import Root from "../Root";
import { Home } from "../Sections/index";

import {
  Doctor,
  SuggetedProject,
  CurrentProject,
  Chat,
  Student,
  ShowDoctors,
  ChooseProject,
  ShowProjects,
  Members,
  Boxes,
  Notifications,
  FirstRegister,
  SignUp,
  SuggestNotifications,
  RequestNotifications,
  Verify,
  ForgetPassword,
  NewPassword,
  YourAllocations,
  TakenProjects,
} from "../Pages/index";
import NotificationsDoctor from "../Pages/NotificationsDoctor/NotificationsDoctor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Doctor",
        element: <Doctor />,
      },
      {
        path: "/Student",
        element: <Student />,
      },
      {
        path: "/Currentproject",
        element: <CurrentProject />,
      },
      {
        path: "/Chat",
        element: <Chat />,
      },
      {
        path: "/Suggetedproject",
        element: <SuggetedProject />,
      },
      { path: "/Firstregister", element: <FirstRegister /> },
      { path: "/Showdoctors", element: <ShowDoctors /> },
      { path: "/Showprojects", element: <ShowProjects /> },
      { path: "/Chooseproject", element: <ChooseProject /> },
      { path: "/Members", element: <Members /> },
      { path: "/Boxes", element: <Boxes /> },
      { path: "/Notifications", element: <Notifications /> },
      { path: "/NotificationsDoctor", element: <NotificationsDoctor /> },
      { path: "/SuggestNotificatios", element: <SuggestNotifications /> },
      { path: "/RequestNotificatios", element: <RequestNotifications /> },
      { path: "/SignUp", element: <SignUp /> },
      { path: "/Verify", element: <Verify /> },
      { path: "/ForgetPassword", element: <ForgetPassword /> },
      { path: "/NewPassword", element: <NewPassword /> },
      { path: "/Yourallocations", element: <YourAllocations /> },
      { path: "/Takenprojects", element: <TakenProjects /> },
    ],
  },
]);

export default router;
