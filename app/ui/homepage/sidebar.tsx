import Link from "next/link";
import NavLinks from "./nav-links";
import UserPic from "../images/user-pic";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


export default function Sidebar() {
    return (
        <div className="flex h-full w-{360px} bg-midnight flex-col px-3 py-4 md:px-4">
            {/* Profile */}
            <Link 
                className="mb-2 flex h-10 items-end justify-start rounded-md bg-transparent p-4 md:h-32"
                href="/profile"
            >
                <UserPic />
                <p className="text-left text-2xl">Muthula<br />Alwis</p>
            </Link>

            {/* Search */}
            <form className="flex w-full h-12 items-center justify-start rounded-md bg-transparent p-4 mb-2 md:mb-4 md:mt-6">
                <input
                    className="flex-grow h-11 w-5/6 rounded-md bg-customBlackBlue p-2 text-sm font-medium"
                    type="text"
                    placeholder="Find Anything"
                />
            </form>

            {/* Add Note Button */}
            <button className="flex h-12 w-5/6 mx-auto items-center justify-center rounded-md bg-customHeroPurple p-3 text-sm font-medium custom-btn md:flex-none md:justify-center md:p-2 md:px-3 md:mb-10">
                <div className="flex items-center justify-center">
                    <AddCircleOutlineIcon sx={{ fontSize: 20 }} className="mx-1" />
                    <p className="hidden md:block">Add Note</p>
                </div>
            </button>

            {/* Nav Links */}
            <div className="flex grow w-full flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <NavLinks />
                <div className="hidden h-auto w-full grow rounded-md bg-transparent md:block"></div>
                <hr />
                <form>
                    <Link href="/settings">
                        <button className="flex h-[48px] w-5/6 mx-auto grow custom-btn items-center justify-center gap-2 rounded-md bg-transparent p-3 text-sm font-medium md:flex-none md:justify-start md:p-8 md:px-3 md:my-4">
                            <SettingsIcon sx={{ fontSize: 32 }} className="mx-1" />
                            <div className="hidden md:block text-xl">Settings</div>
                        </button>
                    </ Link>
                    <Link href="/login">
                        <button className="flex h-[48px] w-5/6 mx-auto grow custom-btn items-center justify-center gap-2 rounded-md bg-transparent p-3 text-sm font-medium hover:bg-customGreyBlue md:flex-none md:justify-start md:p-8 md:px-3 md:my-4 md:mt-6">
                            <ExitToAppIcon sx={{ fontSize: 32 }} className="mx-1" />
                            <div className="hidden md:block text-xl">Sign Out</div>
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
}
