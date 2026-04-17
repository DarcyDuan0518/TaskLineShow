// Task configuration file - 可以方便修改任务标签、颜色、位置和数据提取规则

// 任务行位置配置（可调整纵轴标签间隔）
// 值越大显示越靠上，从上到下依次排列
const taskRows = {
    'Core2_BSW_ASILD_Task_5ms': 4.8,
    'Core2_BSW_ASILD_Task_10ms': 4.6,
    'Core2_Chassis_ASILD_BSWTask_1ms': 4.4,
    'Core2_Chassis_ASILD_CDDInTask_5ms': 4.2,
    'Core2_Chassis_ASILD_Task_10ms': 4.0,
    'Core2_Chassis_ASILD_Task_20ms': 3.8,
    'Core2_Chassis_ASILD_Task_40ms': 3.6,
    'Core2_Chassis_ASILD_Task_5ms': 3.4,
    'Core2_BSW_ASILD_Task_1ms': 3.2,
    'ASW_Rte_Write': 2.2,
    'Adpt_CAN_Write': 1.6,
    'EaC1_5ms_CAN1': 1.0,
    'EaC2_5ms_CAN2': 0.4,
    // 空标签行，方便临时拖动数据
    '空': 0.2
};

// 任务颜色配置
const taskColors = {
    'Core2_Chassis_ASILD_Task_5ms': 'rgba(54, 162, 235, 0.7)',
    'Core2_BSW_ASILD_Task_1ms': 'rgba(255, 99, 132, 0.7)',
    'Core2_BSW_ASILD_Task_5ms': 'rgba(255, 159, 64, 0.7)',
    'Core2_BSW_ASILD_Task_10ms': 'rgba(75, 192, 192, 0.7)',
    'Core2_Chassis_ASILD_BSWTask_1ms': 'rgba(153, 102, 255, 0.7)',
    'Core2_Chassis_ASILD_CDDInTask_5ms': 'rgba(255, 205, 86, 0.7)',
    'Core2_Chassis_ASILD_Task_10ms': 'rgba(201, 203, 207, 0.7)',
    'Core2_Chassis_ASILD_Task_20ms': 'rgba(54, 162, 235, 0.7)',
    'Core2_Chassis_ASILD_Task_40ms': 'rgba(153, 102, 255, 0.7)',
    'ASW_Rte_Write': 'rgba(75, 192, 192, 0.9)',
    'Adpt_CAN_Write': 'rgba(153, 102, 255, 0.9)',
    'EaC1_5ms_CAN1': 'rgba(255, 159, 64, 0.9)',
    'EaC2_5ms_CAN2': 'rgba(255, 205, 86, 0.9)',
    // 空标签行的颜色
    '空': 'rgba(200, 200, 200, 0.3)'
};

// 数据提取规则 - 基于数值范围的识别模式
const dataExtractionRules = {
    // 时间单位转换因子（将原始数值转换为毫秒）
    // 例如：除以100000将纳秒转换为毫秒
    timeScaleFactor: 100000,

    // 数据范围定义（单位：纳秒）
    // 每个任务类型对应一个数值范围，时间值 = 原始值 - 范围起始值
    dataRanges: [
        {
            // Core2_Chassis_ASILD_Task_5ms task 起始点
            task: 'Core2_Chassis_ASILD_Task_5ms',
            type: 'start',
            rangeStart: 1 * 10000000000000,
            rangeEnd: 2 * 10000000000000
        },
        {
            // Core2_Chassis_ASILD_Task_5ms task 结束点
            task: 'Core2_Chassis_ASILD_Task_5ms',
            type: 'end',
            rangeStart: 2 * 10000000000000,
            rangeEnd: 3 * 10000000000000
        },
        {
            // ASW_Rte_Write 代码运行时刻
            task: 'ASW_Rte_Write',
            type: 'point',
            rangeStart: 3 * 10000000000000,
            rangeEnd: 4 * 10000000000000
        },
        {
            // Core2_BSW_ASILD_Task_1ms task 起始点
            task: 'Core2_BSW_ASILD_Task_1ms',
            type: 'start',
            rangeStart: 4 * 10000000000000,
            rangeEnd: 5 * 10000000000000
        },
        {
            // Core2_BSW_ASILD_Task_1ms task 结束点
            task: 'Core2_BSW_ASILD_Task_1ms',
            type: 'end',
            rangeStart: 5 * 10000000000000,
            rangeEnd: 6 * 10000000000000
        },
        {
            // Adpt_CAN_Write 代码运行时刻
            task: 'Adpt_CAN_Write',
            type: 'point',
            rangeStart: 6 * 10000000000000,
            rangeEnd: 7 * 10000000000000
        },
        {
            // EaC1_5ms_CAN1 代码运行时刻
            task: 'EaC1_5ms_CAN1',
            type: 'point',
            rangeStart: 7 * 10000000000000,
            rangeEnd: 8 * 10000000000000
        },
        {
            // EaC2_5ms_CAN2 代码运行时刻
            task: 'EaC2_5ms_CAN2',
            type: 'point',
            rangeStart: 8 * 10000000000000,
            rangeEnd: 9 * 10000000000000
        },
        {
            // Core2_BSW_ASILD_Task_5ms task 起始点
            task: 'Core2_BSW_ASILD_Task_5ms',
            type: 'start',
            rangeStart: 9 * 10000000000000,
            rangeEnd: 10 * 10000000000000
        },
        {
            // Core2_BSW_ASILD_Task_5ms task 结束点
            task: 'Core2_BSW_ASILD_Task_5ms',
            type: 'end',
            rangeStart: 10 * 10000000000000,
            rangeEnd: 11 * 10000000000000
        },
        {
            // Core2_BSW_ASILD_Task_10ms task 起始点
            task: 'Core2_BSW_ASILD_Task_10ms',
            type: 'start',
            rangeStart: 11 * 10000000000000,
            rangeEnd: 12 * 10000000000000
        },
        {
            // Core2_BSW_ASILD_Task_10ms task 结束点
            task: 'Core2_BSW_ASILD_Task_10ms',
            type: 'end',
            rangeStart: 12 * 10000000000000,
            rangeEnd: 13 * 10000000000000
        },
        {
            // Core2_Chassis_ASILD_BSWTask_1ms task 起始点
            task: 'Core2_Chassis_ASILD_BSWTask_1ms',
            type: 'start',
            rangeStart: 13 * 10000000000000,
            rangeEnd: 14 * 10000000000000
        },
        {
            // Core2_Chassis_ASILD_BSWTask_1ms task 结束点
            task: 'Core2_Chassis_ASILD_BSWTask_1ms',
            type: 'end',
            rangeStart: 14 * 10000000000000,
            rangeEnd: 15 * 10000000000000
        },
        {
            // Core2_Chassis_ASILD_CDDInTask_5ms task 起始点
            task: 'Core2_Chassis_ASILD_CDDInTask_5ms',
            type: 'start',
            rangeStart: 15 * 10000000000000,
            rangeEnd: 16 * 10000000000000
        },
        {
            // Core2_Chassis_ASILD_CDDInTask_5ms task 结束点
            task: 'Core2_Chassis_ASILD_CDDInTask_5ms',
            type: 'end',
            rangeStart: 16 * 10000000000000,
            rangeEnd: 17 * 10000000000000
        },
        {
            // Core2_Chassis_ASILD_Task_10ms task 起始点
            task: 'Core2_Chassis_ASILD_Task_10ms',
            type: 'start',
            rangeStart: 17 * 10000000000000,
            rangeEnd: 18 * 10000000000000
        },
        {
            // Core2_Chassis_ASILD_Task_10ms task 结束点
            task: 'Core2_Chassis_ASILD_Task_10ms',
            type: 'end',
            rangeStart: 18 * 10000000000000,
            rangeEnd: 19 * 10000000000000
        },
        {
            // Core2_Chassis_ASILD_Task_20ms task 起始点
            task: 'Core2_Chassis_ASILD_Task_20ms',
            type: 'start',
            rangeStart: 19 * 10000000000000,
            rangeEnd: 20 * 10000000000000
        },
        {
            // Core2_Chassis_ASILD_Task_20ms task 结束点
            task: 'Core2_Chassis_ASILD_Task_20ms',
            type: 'end',
            rangeStart: 20 * 10000000000000,
            rangeEnd: 21 * 10000000000000
        },
        {
            // Core2_Chassis_ASILD_Task_40ms task 起始点
            task: 'Core2_Chassis_ASILD_Task_40ms',
            type: 'start',
            rangeStart: 21 * 10000000000000,
            rangeEnd: 22 * 10000000000000
        },
        {
            // Core2_Chassis_ASILD_Task_40ms task 结束点
            task: 'Core2_Chassis_ASILD_Task_40ms',
            type: 'end',
            rangeStart: 22 * 10000000000000,
            rangeEnd: 23 * 10000000000000
        }
    ]
};

// 四个点状信号的阶梯图 Y 值数组（各40个元素，第i个点读下标i的值）
// 可修改为实际信号值，值越大在 Y 轴上显示越高
// Error 数据文件对应的信号值
const pointStepValuesError = {
    'ASW_Rte_Write': [
         0,  1,  2,  3,  4,  5,  6,  0,  0,  0,
         0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
         0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    ],
    'Adpt_CAN_Write': [
         0,  0,  0,  1,  1,  2,  2,  2,  3,  3,
         4,  4,  4,  5,  5,  6,  6,  6,  0,  0,
         0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
         0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
    ],
    'EaC1_5ms_CAN1': [
         0,  1,  1,  3,  3,  5,  0,  0,  0,  0,
         0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
         0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
         0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
    ],
    'EaC2_5ms_CAN2': [
         0,  0,  1,  2,  3,  4,  5,  6,  0,  0,
         0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
         0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
         0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
    ],
};

// Normal 数据文件对应的信号值
const pointStepValuesNormal = {
    'ASW_Rte_Write': [
         0,  1,  2,  3,  4,  5,  6,  0,  0,  0,
         0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
         0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    ],
    'Adpt_CAN_Write': [
         0,  0,  0,  1,  1,  2,  2,  2,  3,  3,
         4,  4,  4,  5,  5,  6,  6,  6,  0,  0,
         0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
         0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
    ],
    'EaC1_5ms_CAN1': [
         0,  1,  2,  3,  4,  5,  0,  0,  0,  0,
         0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
         0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
         0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
    ],
    'EaC2_5ms_CAN2': [
         0,  1,  2,  3,  4,  5,  6,  7,  0,  0,
         0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
         0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
         0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
    ],
};

// 选择文件加载时对应的信号值
const pointStepValuesCustom = {
    'ASW_Rte_Write': [
         0,  1,  2,  3,  4,  5,  6,  0,  0,  0,
         0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
         0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    ],
    'Adpt_CAN_Write': [
         0,  0,  0,  1,  1,  2,  2,  2,  3,  3,
         4,  4,  4,  5,  5,  6,  6,  6,  0,  0,
         0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
         0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
    ],
    'EaC1_5ms_CAN1': [
         0,  1,  2,  3,  4,  5,  0,  0,  0,  0,
         0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
         0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
         0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
    ],
    'EaC2_5ms_CAN2': [
         0,  0,  2,  2,  4,  5,  6,  7,  0,  0,
         0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
         0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
         0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
    ],
};

// 图表显示配置
const displayConfig = {
    // 纵轴最大值
    yAxisMax: 5.0,

    // 纵轴最小值
    yAxisMin: 0,

    // 纵轴标签字体大小
    yAxisFontSize: 16,

    // 横轴标题字体大小
    xAxisTitleFontSize: 16,

    // 任务柱状图宽度比例
    barPercentage: 0.95,

    // 任务柱状图固定像素高度（单行无重叠，可适当加大）
    barThickness: 30,

    // 阶梯图在纵轴方向占用的波形带高度（单位同 taskRows，建议 0.2~0.35）
    stepBandHeight: 1.0,

    // 散点半径
    pointRadius: 5,

    // 散点悬停半径
    pointHoverRadius: 8
};