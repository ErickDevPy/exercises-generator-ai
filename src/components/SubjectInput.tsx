import { useState, useEffect } from 'react';
import type { UseFormSetValue, FieldValues, Path } from 'react-hook-form';
import type { KeyboardEvent, ChangeEvent } from 'react';

interface SubjectInputProps<TFieldValues extends FieldValues> {
    setValue: UseFormSetValue<TFieldValues>;
    name: keyof TFieldValues; 
    placeholder?: string;
}
export function SubjectInput<TFieldValues extends FieldValues>({ setValue, name, placeholder }: SubjectInputProps<TFieldValues>) {
    const [tags, setTags] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>('');

    useEffect(() => {
        setValue(name as Path<TFieldValues>, tags as any, { shouldValidate: true }); 
    }, [tags, name, setValue]);

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' || e.key === 'Tab') {
            e.preventDefault();
            const newTag = inputValue.trim();

            if (newTag && !tags.includes(newTag)) {
                setTags([...tags, newTag]);
                setInputValue('');
            }
        }
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const removeTag = (tagToRemove: string) => {
        setTags(tags.filter(tag => tag !== tagToRemove));
    };

    return (
        <div className="main-input hide-scrollbar space-y-2">
            {tags.length > 0 && (
                <div className="tag-container">
                    {tags.map((tag, index) => (
                        <span key={index} className="tag-item">
                            {tag}
                            <button type="button" onClick={() => removeTag(tag)} className="tag-remove-button">&times;</button>
                        </span>
                    ))}
                </div>
            )}
            
            <input
                id={name as string}
                name={name as string}
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                type="text"
                className="inside-input"
                placeholder={tags.length === 0 ? placeholder : ''}
            />
        </div>
    );
}