import React from "react";
import { AnimItem } from "./anim_item";


const formatDate = (date: Date) => {
    const formatted = date.toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'short',
    });
    return formatted;
}
export const AnimTable = React.memo(({ animItems }: { animItems: AnimItem[] }) => {
    return <div style={{ width: "40%", fontSize: "smaller",  zIndex: 10000, height: "100vh", background: "white" }}>
        <table>
            <tbody>
                <tr>
                    <th>
                        Date added
                    </th>
                    <th>
                        Location
                    </th>
                    <th>
                        Title
                    </th>
                    <th>
                        Author
                    </th>
            
                </tr>
                {animItems.map((item, index) => {
                    return (<tr key={index}>
                        <td>

                            {formatDate(item.dateAdded)}
                        </td>
                        <td>
                            {item.pos.lat}
                        </td>
                        <td>
                            {item.title}
                        </td>
                        <td>
                            {item.author}
                        </td>
                   
                    </tr>)
                })}
            </tbody>
        </table>

    </div>
});

AnimTable.displayName = "AnimTable"