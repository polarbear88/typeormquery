export class CommonUtils {
    /**
     * 设置类属性元数据
     * @param key key
     * @param value value
     * @returns decorator
     */
    public static SetPropertyMetadata(key: string, value: any) {
        return (target: any, propertyKey: string | symbol) => {
            Reflect.defineMetadata(key, value, target, propertyKey);
        };
    }

    /**
     * 设置类元数据
     * @param key key
     * @param value value
     * @returns decorator
     */
    public static SetClassMetadata(key: string, value: any) {
        return (target: any) => {
            Reflect.defineMetadata(key, value, target);
        };
    }
}
