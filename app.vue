import InputText from 'primevue/';
<template>
  <div class="grid p-fluid">
    <div class="col-12 md:col-12">
      <InputText v-model="inputName"></InputText>
      <Dropdown v-model="selectedType" :options="data" optionLabel="type"></Dropdown>
      <InputText disabled :value="selectedType.carbon_footprint_km + 'g CO2/km'"></InputText>
    </div>
    <div>
      <div class="p-inputgroup">
        <InputText placeholder="0" v-model="inputKm" />
        <span class="p-inputgroup-addon">km</span>
      </div>
      <Button @click="insert">POST</Button>
    </div>
    <div class="card" style="min-height: 400px;">
      <Chart type="bar" :data="_data" :options="stackedOptions" />
    </div>
  </div>
</template>


<script setup>
const data = ref([
  { type: "plane", carbon_footprint_km: 255 },
  { type: "bus", carbon_footprint_km: 105 },
  { type: "car", carbon_footprint_km: 96 },
  { type: "motorbike", carbon_footprint_km: 80 },
  { type: "train", carbon_footprint_km: 41 },
  { type: "bike", carbon_footprint_km: 22 },
  { type: "walking", carbon_footprint_km: 19 }
]);

const colors = [
  "#FF0000",
  "#EEAA00",
  "#DD0000",
  "#CC0000",
  "#BB44EE",
  "#AA00AA",
  "#0000FF",
]

const stackedOptions = ref(
  {
    plugins: {
      tooltip: {
        mode: 'index',
        intersect: false
      },
      legend: {
        labels: {
          color: '#495057'
        }
      }
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          color: '#495057'
        },
        grid: {
          color: '#ebedef'
        }
      },
      y: {
        stacked: true,
        ticks: {
          color: '#495057'
        },
        grid: {
          color: '#ebedef'
        }
      }
    }
  }
);

const stackedData = ref({
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    type: 'bar',
    label: 'Dataset 1',
    backgroundColor: '#42A5F5',
    data: [50, 25, 12, 48, 90, 76, 42]
  }, {
    type: 'bar',
    label: 'Dataset 2',
    backgroundColor: '#66BB6A',
    data: [21, 84, 24, 75, 37, 65, 34]
  }, {
    type: 'bar',
    label: 'Dataset 3',
    backgroundColor: '#FFA726',
    data: [41, 52, 24, 74, 23, 21, 32]
  }]
});

const _data = computed(() => {

  const labels = Array.from(new Set(records.value.map(r => r.name)));
  const datasets = data.value.map((d,index) => {
    return {
      type: 'bar',
      label: d.type,
      backgroundColor: colors.at(index),
      data: Array(labels.length).fill(0)
    }
  });
  const x = datasets.map(d => d.data);
  console.log(x)
  records.value.forEach(record => {
    const personName = labels.find(label => label === record.name);
    const personIndex = labels.indexOf(personName);

    const match = datasets.find(d => d.label === record.type);
    match.data[personIndex] += record.amount;
    console.log(`${personName}(${personIndex}) - ${match.label} = ${record.amount}`, match.data[personIndex] )
  });
  return {
    labels: labels,
    datasets: datasets
  };
})

const inputName = ref("");
const inputKm = ref(10);
const selectedType = ref(data.value[0]);

const records = ref([]);
function insert() {
  const record = {
    name: inputName.value,
    type: selectedType.value.type,
    amount: inputKm.value * selectedType.value.carbon_footprint_km
  }
  records.value.push(record);
}
</script>
