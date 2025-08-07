import React, { useState, useCallback, useEffect } from 'react'
import { AnimItem } from "./anim_item";
import styles from "./search_bar.module.css";

const SearchBar = ({ items, setSelectedItem, isMobile }: { items: AnimItem[], setSelectedItem: (item: AnimItem) => void, isMobile: boolean }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState<AnimItem[]>([])


    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function debounce<T extends (...args: any[]) => void>(func: T, delay: number): (...args: Parameters<T>) => void {
        let timeoutId: ReturnType<typeof setTimeout>;
        return (...args) => {
            clearTimeout(timeoutId)
            timeoutId = setTimeout(() => func(...args), delay)
        }
    }


    const handleSearch = useCallback(
        debounce((term) => {
            if (term.trim() === '') {
                setSearchResults([])
            } else {
                const lowercaseTerm = term.toLowerCase()
                const results = items.filter((item) =>
                    item.posString.toLowerCase().includes(lowercaseTerm) ||
                    item.author.toLowerCase().includes(lowercaseTerm) ||
                    item.title.toLowerCase().includes(lowercaseTerm))

                setSearchResults(results)


            }
        }, 0),
        [],
    )

    useEffect(() => {
        handleSearch(searchTerm)
    }, [searchTerm, handleSearch])

    const handleInputChange = (value: string) => {
        setSearchTerm(value)
    }

    const selectItem = (result: AnimItem) => {
        setSelectedItem(result);
        setSearchResults([]);
        // setSearchTerm(`${result.title} by ${result.author}, ${result.posString}`)
    }

    return (<div className={isMobile ? styles.containerMobile : styles.container}>
        <form
            onSubmit={(e) => e.preventDefault()}
            className={styles.formOuter}
        >
            <input
                id="animjamSearch"
                type="search"
                value={searchTerm}
                onChange={(e) => handleInputChange(e.target.value)}
                className={searchResults.length > 0 ? styles.searchBarInputWithResults : styles.searchBarInput}
                placeholder="Search by title, author or city"
            />
        </form>

        {searchResults.length > 0 && (
            <div className={styles.resultsContainer}>
                <ul style={{ listStyle: "none" }}>
                    {searchResults.map((result) => (
                        <li key={result.youtubeId} className={styles.result} onClick={() => { selectItem(result) }}>
                            <div>
                                <span style={{ fontWeight: 500 }}>{result.title}</span> by {result.author}, {result.posString}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )}
    </div>
    )

}

export default SearchBar