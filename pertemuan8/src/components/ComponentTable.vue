<script setup>
  defineProps({
    dataTable: {
      type: Object,
      default: {
        header: ["ID", "Nama", "Position", "No. Telp", "Email"]
      },
  },
});

const emit = defineEmits(["showData"]);
</script>

<template>
  <table>
    <thead>
      <tr>
        <th v-for="(data, index) in dataTable.header" :key="index">
          {{ data }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="data in dataTable.data" :key="data.id">
        <td>{{ data.id }}</td>
        <td>{{ data.nama }}</td>
        <td>{{ data.position }}</td>
        <td>{{ data.no_telp }}</td>
        <td>{{ data.email }}</td>
        <td>
          <button type="Submit" @click="emit('showData', data)">Show Data</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>