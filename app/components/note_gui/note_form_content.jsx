'use client';

import { TextField } from '@mui/material';
import styles from "./note.module.css";

export default function NoteFormContent({
    content,
    handleContentChange,
    initialMode,
    isEditMode,
    isNestedMode,
    isViewMode,
    nestedContent,
    toggleEditModeTrue
}) {
    const readOnlyMode = initialMode === 'read' && !isViewMode;
    const placeholderText = isNestedMode ? 'Nested - Create a note...' : 'Create a note...';

    const handleFocus = () => {
        if (!readOnlyMode && !isNestedMode) {
            toggleEditModeTrue();
        }
    };

    const handleClick = () => {
        if (readOnlyMode) {
            toggleEditModeTrue();
        }
    };

    return (
        <>
            {((initialMode === "create" || content.length > 0 || isEditMode) && (
                <div className={styles.contentContainer}>
                    <TextField
                        inputProps={{
                            autoComplete: 'off',
                            readOnly: readOnlyMode,
                            style: { fontSize: 16 },
                        }}
                        className={styles.contentTextField}
                        multiline
                        onChange={handleContentChange}
                        onClick={handleClick}
                        onFocus={handleFocus}
                        placeholder={placeholderText}
                        sx={{
                            width: '100%',
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': { border: 'none' },
                                '&:hover fieldset': { border: 'none' },
                                '&.Mui-focused fieldset': { border: 'none' },
                            },
                        }}
                        value={isNestedMode ? nestedContent : content}
                    />
                </div>
            ))}
        </>
    );
}