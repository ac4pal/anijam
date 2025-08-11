import React from "react";
import { AnimItem } from "./anim_item";
import styles from "./anim_table.module.css";


const formatDate = (date: Date) => {
    const formatted = date.toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'short',
    });
    return formatted;
}

function sortItemsByDate(items: AnimItem[]) {
    return items.sort((it1, it2) => {
        return it2.dateAdded.getTime() - it1.dateAdded.getTime();
    })
}

function sortItensByLocation(items: AnimItem[]) {
    return items.sort((it1, it2) => {
        return it1.posString.localeCompare(it2.posString);
    })
}

function sortItemsByTitle(items: AnimItem[]) {
    return items.sort((it1, it2) => {
        return it1.title.localeCompare(it2.title);
    })
}

function sortItemsByAuthor(items: AnimItem[]): AnimItem[] {
    return items.sort((it1, it2) => {
        return it1.author.localeCompare(it2.author);
    })
}


// const findDuplicatePositions = (items: AnimItem[]) => {
//   const seen = new Map<string, AnimItem[]>();

//   items.forEach(item => {
//     const key = `${item.pos.lat},${item.pos.lng}`;
//     if (!seen.has(key)) {
//       seen.set(key, []);
//     }
//     seen.get(key)!.push(item);
//   });

//   // Filter only duplicates (more than 1 item with same lat/lng)
//   const duplicates = Array.from(seen.values()).filter(group => group.length > 1);

//   return duplicates;
// };

export const AnimTable = React.memo(({ animItems, selectedItem, setSelectedItem }: { animItems: AnimItem[], selectedItem: AnimItem | null, setSelectedItem: (item: AnimItem) => void }) => {

    const [sortedAnimItems, setSortedItems] = React.useState(animItems);


    React.useEffect(() => {
    }, sortedAnimItems)


    return <div className={styles.animTable}>
        <table>
            <tbody>
                <tr className={styles.tr}>
                    <th className={styles.th} onClick={() => {
                        const updated = [...sortItemsByDate(sortedAnimItems)];
                        setSortedItems(updated);
                    }}
                    >
                        Date added
                    </th>
                    <th className={styles.th} onClick={() => {
                        const updated = [...sortItensByLocation(sortedAnimItems)];
                        setSortedItems(updated);
                    }}
                    >
                        Location
                    </th>
                    <th className={styles.th} onClick={() => {
                        const updated = [...sortItemsByTitle(sortedAnimItems)];
                        setSortedItems(updated);
                    }}
                    >
                        Title
                    </th>
                    <th className={styles.th} onClick={() => {
                        const updated = [...sortItemsByAuthor(sortedAnimItems)];
                        setSortedItems(updated);
                    }}
                    >
                        Author
                    </th>

                </tr>
                {sortedAnimItems.map((item) => {
                    return (<tr onClick={() => { setSelectedItem(item) }} className={selectedItem === item ? styles.trSelected : styles.tr} key={item.id}>
                        <td className={styles.td}>

                            {formatDate(item.dateAdded)}
                        </td>
                        <td className={styles.td}>
                            {item.posString}
                        </td>
                        <td className={styles.td}>
                            {item.title}
                        </td>
                        <td className={styles.td}>
                            {item.author}
                        </td>

                    </tr>)
                })}
            </tbody>
        </table>

    </div>
});

AnimTable.displayName = "AnimTable"