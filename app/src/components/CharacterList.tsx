import React, { useEffect, useRef, useState, useCallback } from "react";
import { useQuery } from "@apollo/client";
import { CharacterResponse } from "../models/character";
import { GET_CHARACTERS } from "../service/queries";
import CharacterCard from "./CharacterCard";
import Pagination from "./Pagination";
import Filters from "./Filters";

interface CharacterListProps {
    language: "en" | "de";
}

const CharacterList: React.FC<CharacterListProps> = ({ language }) => {
    const [page, setPage] = useState(1)
    const [status, setStatus] = useState("")
    const [species, setSpecies] = useState("")
    const [sortBy, setSortBy] = useState("")
    const [useInfiniteScroll, setUseInfiniteScroll] = useState(false);

    const { loading, error, data, fetchMore } = useQuery<CharacterResponse>(GET_CHARACTERS, {
        variables: { page, status, species },
        notifyOnNetworkStatusChange: true,
    })

    const sortedCharacters = React.useMemo(() => {
        if (!data?.characters.results) return [];
        let sorted = [...data.characters.results];
        if (sortBy === "name") {
            sorted.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === "origin") {
            sorted.sort((a, b) => a.origin.name.localeCompare(b.origin.name));
        }
        return sorted;
    }, [data, sortBy]);


    const scrollRef = useRef<HTMLDivElement | null>(null);
    const observer = useRef<IntersectionObserver | null>(null);
    const lastCharacterRef = useCallback(
        (node: HTMLDivElement | null) => {
        if (loading || !useInfiniteScroll) return;

        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(
            (entries) => {
            if (entries[0].isIntersecting && data?.characters.info.next) {
                fetchMore({
                    variables: { page: page + 1, status, species },
                    updateQuery: (prev, { fetchMoreResult }) => {
                        if (!fetchMoreResult) return prev;
                        return {
                            ...fetchMoreResult,
                            characters: {
                                ...fetchMoreResult.characters,
                                results: [
                                    ...prev.characters.results,
                                    ...fetchMoreResult.characters.results,
                                ],
                            },
                        };
                    },
                });
                setPage((prev) => prev + 1);
            }
        }, {rootMargin: "300px"}
    );
        if (node) observer.current.observe(node);
    }, [loading, useInfiniteScroll, fetchMore, data?.characters.info.next, page, status, species]);

    useEffect(() => {
        return () => {
            if (observer.current) observer.current.disconnect();
        };
    }, []);
    useEffect(() => {
        if (scrollRef.current) {
            const scrollHeight = scrollRef.current.scrollHeight;
            scrollRef.current.scrollTo({
                top: scrollHeight,
                behavior: "smooth",
            });
        }
    }, [data]);


    if (loading) return <p>{language === "en" ? "Loading..." : "Lädt..."}</p>;
    if (error) return <p>{language === "en" ? "Error loading data" : "Fehler beim Laden der Daten"}</p>;

    return (
        <div className="container-fluid">
            <h1 className="text-center my-4">
                {language === "en" ? "Rick and Morty Characters" : "Rick und Morty Charaktere"}
            </h1>

            <div className="d-flex justify-content-center mb-3">
                <label className="form-check-label me-2">{language === "en" ? "Use Infinite Scroll" : "Unendliches Scrollen"}</label>
                <input
                    type="checkbox"
                    className="form-check-input"
                    checked={useInfiniteScroll}
                    onChange={() => setUseInfiniteScroll((prev) => !prev)}
                />
            </div>

            <Filters
                status={status}
                species={species}
                sortBy={sortBy}
                setStatus={setStatus}
                setSpecies={setSpecies}
                setSortBy={setSortBy}
                language={language}
            ></Filters>
            {!useInfiniteScroll && (
                <Pagination
                    page={page}
                    setPage={setPage}
                    hasNext={!!data?.characters.info.next}
                    hasPrev={!!data?.characters.info.prev}
                    language={language}
                />
            )}
            <div className="card-container">
                {sortedCharacters.map((character, index) => {
                    if (sortedCharacters.length === index + 1 && useInfiniteScroll) {
                        return (
                            <div ref={lastCharacterRef} key={character.id} className="card">
                                <CharacterCard character={character} language={language} />
                            </div>
                        );
                    }
                    return (
                        <div key={character.id} className="card">
                            <CharacterCard character={character} language={language} />
                        </div>
                    );
                })}
            </div>

            {!useInfiniteScroll && (
                <Pagination
                    page={page}
                    setPage={setPage}
                    hasNext={!!data?.characters.info.next}
                    hasPrev={!!data?.characters.info.prev}
                    language={language}
                />
            )}
        </div>
    );
}

export default CharacterList;