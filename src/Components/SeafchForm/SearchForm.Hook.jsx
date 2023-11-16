import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ParameterContext } from "../usecontext/parametersearch";


const useSearchform = () => {


    const [searchvalue, setSearchvalue, finishSearch, setFinishSearch] = useContext(ParameterContext)

    const { register, handleSubmit, watch, formState: { } } = useForm()

    const keyword = watch('keyword')
    const typeOfseacrh = watch('typeOfseacrh')



    useEffect(() => {
        setSearchvalue({
            'keyword': keyword,
            'typeOfseacrh': typeOfseacrh
        })
        // console.log('keyword', keyword);
        // console.log('typeOfseacrh', typeOfseacrh);
    }, [keyword, typeOfseacrh])


    return {
        fieldKeyword: register("keyword"),
        fieldType: register("typeOfseacrh"),
    }

}

export { useSearchform }
