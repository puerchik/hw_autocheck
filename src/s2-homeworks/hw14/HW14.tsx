import React, { useEffect, useState } from "react";
import s2 from "../../s1-main/App.module.css";
import s from "./HW14.module.css";
import axios from "axios";
import SuperDebouncedInput from "./common/c8-SuperDebouncedInput/SuperDebouncedInput";
import { useSearchParams } from "react-router-dom";

/*
 * 1 - дописать функцию onChangeTextCallback в SuperDebouncedInput
 * 2 - дописать функцию sendQuery в HW14
 * 3 - дописать функцию onChangeText в HW14
 * 4 - сделать стили в соответствии с дизайном
 * 5 - добавить HW14 в HW5/pages/JuniorPlus
 * */

const getTechs = (find: string) => {
    return axios.get<{ techs: string[] }>("https://samurai.it-incubator.io/api/3.0/homework/test2", { params: { find } }).catch((e) => {
        alert(e.response?.data?.errorText || e.message);
    });
};

const HW14 = () => {
    const [find, setFind] = useState("");
    const [isLoading, setLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const [techs, setTechs] = useState<string[]>([]);

    const sendQuery = (value: string) => {
        setLoading(true);
        getTechs(value).then((res) => {
            // @ts-ignore
            setTechs(res.data.techs);

            setLoading(false);
            // делает студент
            // сохранить пришедшие данные
            //
        });
    };

    const onChangeText = (value: string) => {
        setFind(value);
        // делает студент
        // добавить/заменить значение в квери урла
        setSearchParams(value);
    };

    useEffect(() => {
        const params = Object.fromEntries(searchParams);
        sendQuery(params.find || "");
        setFind(params.find || "");
    }, []);

    const mappedTechs = techs.map((t) => (
        <div key={t} id={"hw14-tech-" + t} className={s.tech}>
            {t}
        </div>
    ));

    return (
        <div id={"hw14"}>
            <div className={`${s2.hwTitle} ${s.title}`}>Homework #14</div>
            <div className={s2.hw}>
                <div className={`${s2.container}`}>
                    <div className={`${s.wrapper} ${s.flex}`}>
                        <SuperDebouncedInput id={"hw14-super-debounced-input"} value={find} onChangeText={onChangeText} onDebouncedChange={sendQuery} />

                        <div id={"hw14-loading"} className={s.loading}>
                            {isLoading ? "...ищем" : <br />}
                        </div>

                        {mappedTechs}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HW14;

// // тип пропсов обычного инпута
// type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
//     HTMLInputElement>

// // здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута, кроме type
// // (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
// export type SuperDebouncedInputPropsType = Omit<DefaultInputPropsType, 'type'> & {
//     // и + ещё пропсы которых нет в стандартном инпуте
//     onChangeText?: (value: string) => void
//     onEnter?: () => void
//     error?: ReactNode
//     spanClassName?: string
// } // илм экспортировать тип SuperInputTextPropsType
//     & { // плюс специальный пропс SuperPagination
//     onDebouncedChange?: (value: string) => void
// }

// const SuperDebouncedInput: React.FC<SuperDebouncedInputPropsType> = (
//     {
//         onChangeText,
//         onDebouncedChange,

//         ...restProps // все остальные пропсы попадут в объект restProps
//     }
// ) => {
//     const [timerId, setTimerId] = useState<number | undefined>(undefined)

//     const onChangeTextCallback = (value: string) => {
//         onChangeText?.(value)
//         clearTimeout(timerId)
//         if (onDebouncedChange) {
//             setTimerId(+setTimeout(()=>{onDebouncedChange(value)},1500))
//             // делает студент

//             // остановить предыдущий таймер
//             // запустить новый на 1500ms, в котором вызовется функция

//             //
//         }
//     }

//     return (
//         <SuperInputText onChangeText={onChangeTextCallback} {...restProps}/>
//     )
// }

// export default SuperDebouncedInput
