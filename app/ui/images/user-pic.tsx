import { inter } from "../fonts";
import InsertEmoticonRoundedIcon from '@mui/icons-material/InsertEmoticonRounded';

export default function UserPic() {
    return (
        <div className="flex flex-row items-center leading-none mx-3">
            <InsertEmoticonRoundedIcon sx={{ fontSize: 60 }} />
        </div>
    );
}
